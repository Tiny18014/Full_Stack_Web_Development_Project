const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const OrganizerModel = require('./Model/Organizer'); // Ensure this path is correct
const VolunteerModel = require('./Model/Volunteer');
const bcrypt = require('bcryptjs');
const app = express();
const port = 5137;
const EventModel = require('./Model/Event');
const ContactModel=require('./Model/Contact');

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas; ensure your URI is correct and credentials are securely handled
mongoose.connect("mongodb+srv://Tiny18014:Shubham123@tiny.8mcjoj3.mongodb.net/organizer")


app.post('/organizerDashboard', async (req, res) => {
    try {
        // Create a new event document using data from the request body
        const event = new EventModel(req.body);
        // Save the event to the database
        await event.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.post("/login", (req, res) => {
    const{email,password} = req.body;
    OrganizerModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password=== password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        } else{
            res.json("No record Found")
        }
    })
});

app.post("/register", (req, res) => {
    // Destructure the password and other data from req.body
    const { password, ...otherData } = req.body;

    // Define the number of salt rounds for hashing
    const saltRounds = 10;

    // Generate a salt and hash the password
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) {
            return res.status(500).json({ message: "Error generating salt" });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({ message: "Error hashing password" });
            }
            
            // Create the organizer with the hashed password
            OrganizerModel.create({ ...otherData, password: hash })
            .then(organizer => res.status(201).json(organizer))
            .catch(err => res.status(400).json(err));
        });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/registerVolunteer", (req, res) => {
    const { password, ...otherData } = req.body;

    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            return res.status(500).json({ message: "Error generating salt" });
        }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({ message: "Error hashing password" });
            }
            // Update the volunteer data with the hashed password and event name
            VolunteerModel.create({ ...otherData, password: hash })
            .then(volunteer => res.status(201).json(volunteer))
            .catch(err => res.status(400).json(err));
        });
    });
});




// Inside your login route
app.post("/organizerLogin", (req, res) => {
    const { email, password } = req.body;
    OrganizerModel.findOne({ email: email })
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.error('Error during password comparison:', err);
                    res.status(500).json({ message: "Internal server error" });
                } else if (isMatch) {
                    console.log('Password match, logging in user:', user.name);
                    res.json({ message: "Success", name: user.name });
                } else {
                    console.log('Password mismatch for user:', user.name);
                    res.json({ message: "Password is incorrect" });
                }
            });
        } else {
            res.json({ message: "No record Found" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error" });
    });
});

app.post("/volunteerLogin", (req, res) => {
    const { email, password } = req.body;

    VolunteerModel.findOne({ email: email })
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.error('Error during password comparison:', err);
                    res.status(500).json({ message: "Internal server error" });
                } else if (isMatch) {
                    console.log('Password match, logging in user:', user.name);
                    res.json({ message: "Success", name: user.name  });
                } else {
                    console.log('Password mismatch for user:', user.name);
                    res.json({ message: "Password is incorrect" });
                }
            });
        } else {
            res.json({ message: "No record Found" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error" });
    });
});

app.get("/organizerDashboard/:id", (req, res) => {
    const organizerId = req.params.id;
    OrganizerModel.findById(organizerId)
        .then(organizer => {
            if (!organizer) {
                return res.status(404).json({ message: 'Organizer not found' });
            }
            // Send organizer information including name as the response
            res.json({ name: organizer.name /* other fields */ });
        })
        .catch(error => {
            console.error('Error fetching organizer information:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

app.get("/volunteerDashboard/:id", (req, res) => {
    const volunteerId = req.params.id;

    VolunteerModel.findById(volunteerId)
        .then(volunteer => {
            if (!volunteer) {
                return res.status(404).json({ message: 'Volunteer not found' });
            }
            res.json({ 
                name: volunteer.name 
                // Include other fields as necessary
            });
        })
        .catch(error => {
            console.error('Error fetching volunteer information:', error);
            res.status(500).json({ message: 'Internal server error' });
        });
});

app.post('/volunteerDashboard', async (req, res) => {
    try {
        // Extract volunteer's name and event name from the request body
        const { volunteerName, eventName } = req.body;

        // Find the existing volunteer by their name (assuming name is unique)
        const existingVolunteer = await VolunteerModel.findOne({ name: volunteerName });

        if (!existingVolunteer) {
            // Volunteer not found, return an error response
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        // Update the existing volunteer document with the new event name
        existingVolunteer.eventName = eventName;

        // Save the updated volunteer document to the database
        await existingVolunteer.save();

        // Send a success response
        res.status(200).json({ message: 'Event added to volunteer successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error updating volunteer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/contact', async (req, res) => {
    try {
        // Extract form data from request body
        const { name, email, message } = req.body;

        // Create a new instance of the ContactModel
        const contact = new ContactModel({ name, email, message });

        // Save the document to the database
        await contact.save();

        // Send success response
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
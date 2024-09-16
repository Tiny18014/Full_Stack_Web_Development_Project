const mongoose = require('mongoose')

const OrganizerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  orgname: String,
  password: String,
  role: String,
  url: String
    
  });
  
  const OrganizerModel = mongoose.model('organizer', OrganizerSchema);
  module.exports = OrganizerModel
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  locationLink: {
    type: String,
    default: '', // Default value if not provided
  },
  eventImages: [String], // Array of strings (file paths or URLs)
  eventType: {
    type: String,
    enum: ['fundraiser', 'teaching', 'communityService', 'foodDrive'],
    required: true,
  },
  maxVolunteers: {
    type: Number,
    default: 0, // Default value if not provided
  },
  eventDescription: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default value is current date/time
  },
});
  
  const EventModel = mongoose.model('events', EventSchema);
  module.exports = EventModel
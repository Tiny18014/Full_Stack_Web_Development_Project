const mongoose = require('mongoose')

const VolunteerSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    skills: String,
    availability: String,
    eventName: String
  });
  
  const VolunteerModel = mongoose.model('volunteer', VolunteerSchema);
  module.exports = VolunteerModel
const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  consent: {
    type: Boolean,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', VolunteerSchema);

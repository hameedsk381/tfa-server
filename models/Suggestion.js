const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  professions: [{
    type: String,
    required: true
  }],
  reason: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Suggestion', SuggestionSchema);

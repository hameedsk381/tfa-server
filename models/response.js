// models/Response.js
const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  answers: [
    {
      fieldId: String,
      answer: String,
    },
  ],
});

module.exports = mongoose.model('Response', ResponseSchema);

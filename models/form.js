// models/Form.js
const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  title: String,
  description: String,
  fields: [
    {
      fieldType: String,
      label: String,
      options: [String], // for dropdowns, radio buttons, etc.
    },
  ],
});

module.exports = mongoose.model('Form', FormSchema);


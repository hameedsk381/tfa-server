// routes/forms.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form');

router.post('/create', async (req, res) => {
  const newForm = new Form(req.body);
  try {
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.json(form);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;



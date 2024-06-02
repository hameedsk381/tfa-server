const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// Create a new suggestion
router.post('/', async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    res.status(201).json(suggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all suggestions
router.get('/', async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.status(200).json(suggestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a single suggestion by id
router.get('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id);
    if (!suggestion) {
      return res.status(404).json({ error: 'Suggestion not found' });
    }
    res.status(200).json(suggestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a suggestion
router.put('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!suggestion) {
      return res.status(404).json({ error: 'Suggestion not found' });
    }
    res.status(200).json(suggestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a suggestion
router.delete('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndDelete(req.params.id);
    if (!suggestion) {
      return res.status(404).json({ error: 'Suggestion not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

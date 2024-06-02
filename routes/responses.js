// routes/responses.js
const express = require('express');
const router = express.Router();
const Response = require('../models/response');

router.post('/submit', async (req, res) => {
  const newResponse = new Response(req.body);
  try {
    const savedResponse = await newResponse.save();
    res.status(201).json(savedResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
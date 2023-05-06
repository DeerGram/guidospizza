const express = require('express');
const router = express.Router();
const { getOrderAnalytics } = require('../database');

// Get order analytics
router.get('/', async (req, res) => {
  try {
    const analytics = await getOrderAnalytics();
    res.json(analytics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllToppings, createTopping, updateTopping, deleteTopping } = require('../database');

// Get all toppings
router.get('/', async (req, res) => {
  try {
    const toppings = await getAllToppings();
    res.json(toppings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new topping
router.post('/', async (req, res) => {
  try {
    const topping = await createTopping(req.body);
    res.status(201).json(topping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a topping
router.put('/:id', async (req, res) => {
  try {
    const updatedTopping = await updateTopping(req.params.id, req.body);
    res.json(updatedTopping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a topping
router.delete('/:id', async (req, res) => {
  try {
    await deleteTopping(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

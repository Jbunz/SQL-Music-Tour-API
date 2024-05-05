// controllers/stageController.js

const express = require('express');
const router = express.Router();
const db = require('../models');
const { Stage } = db;

// Index Route: Get all stages
router.get('/', async (req, res) => {
  try {
    const stages = await Stage.findAll();
    res.json(stages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Show Route: Get a single stage by ID
router.get('/:id', async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
    if (!stage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    res.json(stage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create Route: Create a new stage
router.post('/', async (req, res) => {
  try {
    const stage = await Stage.create(req.body);
    res.status(201).json(stage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update Route: Update an existing stage by ID
router.put('/:id', async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
    if (!stage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    await stage.update(req.body);
    res.json(stage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete Route: Delete a stage by ID
router.delete('/:id', async (req, res) => {
  try {
    const stage = await Stage.findByPk(req.params.id);
    if (!stage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    await stage.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

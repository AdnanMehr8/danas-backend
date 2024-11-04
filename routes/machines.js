const express = require('express');
const Equipment = require('../models/Machines');
const router = express.Router();

// GET all equipment data
router.get('/', async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET equipment by category
router.get('/:category', async (req, res) => {
  try {
    const equipment = await Equipment.find({ category: req.params.category });
    if (!equipment) return res.status(404).json({ message: 'Equipment not found' });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new equipment entry
router.post('/', async (req, res) => {
  const { category, equipmentList } = req.body;

  const newEquipment = new Equipment({
    category,
    equipmentList
  });

  try {
    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update existing equipment
router.put('/:id', async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).json({ message: 'Equipment not found' });

    equipment.category = req.body.category || equipment.category;
    equipment.equipmentList = req.body.equipmentList || equipment.equipmentList;

    const updatedEquipment = await equipment.save();
    res.json(updatedEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE equipment entry
router.delete('/:id', async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).json({ message: 'Equipment not found' });

    await equipment.remove();
    res.json({ message: 'Equipment removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const MasterData = require('../models/Products');

// Get master data
router.get('/', async (req, res) => {
  try {
    const masterData = await MasterData.findOne().sort({ version: -1 });
    if (!masterData) {
      return res.status(404).json({ msg: 'Master data not found' });
    }
    res.json(masterData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create or update master data
router.post('/', async (req, res) => {
  try {
    const { batches } = req.body;

    if (!batches || !Array.isArray(batches)) {
      return res.status(400).json({ msg: 'Invalid master data format' });
    }

    // Find the current latest version
    const currentMasterData = await MasterData.findOne().sort({ version: -1 });
    const newVersion = currentMasterData ? currentMasterData.version + 1 : 1;

    // Create new master data
    const newMasterData = new MasterData({
      version: newVersion,
      batches: batches
    });

    await newMasterData.save();

    res.json({ msg: 'Master data updated successfully', version: newVersion });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
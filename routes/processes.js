const express = require("express");
const router = express.Router();
const Process = require("../models/Processes");

// Get all processes
router.get("/", async (req, res) => {
  try {
    const processes = await Process.find();
    res.json(processes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new process
router.post("/", async (req, res) => {
  try {
    const newProcess = new Process(req.body);
    await newProcess.save();
    res.json(newProcess);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update process
router.patch("/:id", async (req, res) => {
  try {
    const updatedProcess = await Process.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedProcess);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete process
router.delete("/:id", async (req, res) => {
  try {
    await Process.findByIdAndRemove(req.params.id);
    res.json({ message: "Process deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const BatchPlan = require("../models/BatchRecord");


// Create a new batchInfo record
router.post("/batch-plan", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new BatchPlan(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving batchInfo:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/batches-plan", async (req, res) => {
  try {
    const batchInfoes = await BatchPlan.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/batch-plan/:id", async (req, res) => {
  try {
    const batchInfo = await BatchPlan.findById(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchPlan not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/batch-plan/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await BatchPlan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchPlan not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/batch-plan/:id", async (req, res) => {
  try {
    const result = await BatchPlan.findByIdAndDelete(req.params.id);  // Use `findByIdAndDelete` for `_id`
    if (result) {
      res.status(200).send({ message: "Batch record deleted successfully" });
    } else {
      res.status(404).send({ message: "Batch record not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting batch record", error });
  }
});

module.exports = router;

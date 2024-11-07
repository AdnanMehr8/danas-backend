
const express = require("express");
const router = express.Router();
const BatchInfo = require("../models/BatchInfo");
const Batch = require("../models/Dispensing");
const Mixing = require("../models/Mixing"); 
const Compression = require("../models/Compression");
const Coating = require("../models/Coating"); 
const Printing = require("../models/Printing"); 
const Blistering = require("../models/Blistering");
const Packing = require("../models/Packing");
const BatchInfoPacking = require("../models/BatchInfoPacking");


// Create a new batchInfo record
router.post("/batch-info", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new BatchInfo(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving batchInfo:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/batches-info", async (req, res) => {
  try {
    const batchInfoes = await BatchInfo.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/batch-info/:id", async (req, res) => {
  try {
    const batchInfo = await BatchInfo.findById(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/batch-info/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await BatchInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/batch-info/:id", async (req, res) => {
  try {
    const batchInfo = await BatchInfo.findByIdAndDelete(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json({ message: "BatchInfo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new batchInfoPAcing record
router.post("/batch-info-packing", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new BatchInfoPacking(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving batchInfo:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/batches-info", async (req, res) => {
  try {
    const batchInfoes = await BatchInfoPacking.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/batch-info-packing/:id", async (req, res) => {
  try {
    const batchInfo = await BatchInfoPacking.findById(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfoPacking not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/batch-info-packing/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await BatchInfoPacking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfoPacking not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/batch-info-packing/:id", async (req, res) => {
  try {
    const batchInfo = await BatchInfoPacking.findByIdAndDelete(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json({ message: "BatchInfo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new dispensing record
router.post("/dispensing", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const dispensing = new Batch(req.body);
    await dispensing.save();
    console.log("Saved data:", dispensing);
    res.status(201).json(dispensing);
  } catch (error) {
    console.error("Error saving dispensing:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all dispensing records
router.get("/dispensings", async (req, res) => {
  try {
    const dispensings = await Batch.find();
    res.json(dispensings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record
router.get("/dispensing/:id", async (req, res) => {
  try {
    const dispensing = await Batch.findById(req.params.id);
    if (!dispensing) return res.status(404).json({ message: "Batch not found" });
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a dispensing record
router.patch("/dispensing/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const dispensing = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!dispensing) return res.status(404).json({ message: "Batch not found" });
    res.json(dispensing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a dispensing record
router.delete("/dispensing/:id", async (req, res) => {
  try {
    const dispensing = await Batch.findByIdAndDelete(req.params.id);
    if (!dispensing) return res.status(404).json({ message: "Batch not found" });
    res.json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new mixing record
router.post("/mixing", async (req, res) => {
  console.log("Received mixing data structure:", JSON.stringify(req.body, null, 2));
  try {
    const mixing = new Mixing(req.body);
    await mixing.save();
    console.log("Saved mixing data:", mixing);
    res.status(201).json(mixing);
  } catch (error) {
    console.error("Error saving mixing data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all mixing records
router.get("/mixings", async (req, res) => {
  try {
    const mixings = await Mixing.find();
    res.json(mixings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific mixing record
router.get("/mixing/:id", async (req, res) => {
  try {
    const mixing = await Mixing.findById(req.params.id);
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json(mixing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a mixing record
router.patch("/mixing/:id", async (req, res) => {
  console.log("Fetching mixing record with ID:", req.params.id);
  try {
    const mixing = await Mixing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json(mixing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a mixing record
router.delete("/mixing/:id", async (req, res) => {
  try {
    const mixing = await Mixing.findByIdAndDelete(req.params.id);
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json({ message: "Mixing record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new compression record
router.post("/compression", async (req, res) => {
  console.log("Received compression data structure:", JSON.stringify(req.body, null, 2));
  try {
    const compression = new Compression(req.body);
    await compression.save();
    console.log("Saved compression data:", compression);
    res.status(201).json(compression);
  } catch (error) {
    console.error("Error saving compression data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all compression records
router.get("/compressions", async (req, res) => {
  try {
    const compressions = await Compression.find();
    res.json(compressions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific compression record
router.get("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findById(req.params.id);
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json(compression);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a compression record
router.patch("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json(compression);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a compression record
router.delete("/compression/:id", async (req, res) => {
  try {
    const compression = await Compression.findByIdAndDelete(req.params.id);
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json({ message: "compression record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new coating record
router.post("/coating", async (req, res) => {
  console.log("Received coating data structure:", JSON.stringify(req.body, null, 2));
  try {
    const coating = new Coating(req.body);
    await coating.save();
    console.log("Saved coating data:", coating);
    res.status(201).json(coating);
  } catch (error) {
    console.error("Error saving coating data:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all coating records
router.get("/coatings", async (req, res) => {
  try {
    const coatings = await Coating.find();
    res.json(coatings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific coating record
router.get("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findById(req.params.id);
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json(coating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a coating record
router.patch("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json(coating);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a coating record
router.delete("/coating/:id", async (req, res) => {
  try {
    const coating = await Coating.findByIdAndDelete(req.params.id);
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json({ message: "coating record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new printing record
router.post("/printing", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const printing = new Printing(req.body);
    await printing.save();
    console.log("Saved data:", printing);
    res.status(201).json(printing);
  } catch (error) {
    console.error("Error saving printing:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all printing records
router.get("/printings", async (req, res) => {
  try {
    const printings = await Printing.find();
    res.json(printings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific printing record
router.get("/printing/:id", async (req, res) => {
  try {
    const printing = await Printing.findById(req.params.id);
    if (!printing) return res.status(404).json({ message: "Printing not found" });
    res.json(printing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a printing record
router.patch("/printing/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const printing = await Printing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!printing) return res.status(404).json({ message: "Printing not found" });
    res.json(printing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a printing record
router.delete("/printing/:id", async (req, res) => {
  try {
    const printing = await Printing.findByIdAndDelete(req.params.id);
    if (!printing) return res.status(404).json({ message: "Printing not found" });
    res.json({ message: "Printing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new blistering record
router.post("/blistering", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const blistering = new Blistering(req.body);
    await blistering.save();
    console.log("Saved data:", blistering);
    res.status(201).json(blistering);
  } catch (error) {
    console.error("Error saving blistering:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all blistering records
router.get("/blisterings", async (req, res) => {
  try {
    const blisterings = await Blistering.find();
    res.json(blisterings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific blistering record
router.get("/blistering/:id", async (req, res) => {
  try {
    const blistering = await Blistering.findById(req.params.id);
    if (!blistering) return res.status(404).json({ message: "Blistering not found" });
    res.json(blistering);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blistering record
router.patch("/blistering/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const blistering = await Blistering.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blistering) return res.status(404).json({ message: "Blistering not found" });
    res.json(blistering);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blistering record
router.delete("/blistering/:id", async (req, res) => {
  try {
    const blistering = await Blistering.findByIdAndDelete(req.params.id);
    if (!blistering) return res.status(404).json({ message: "Blistering not found" });
    res.json({ message: "Blistering deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new packing record
router.post("/packing", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const packing = new Packing(req.body);
    await packing.save();
    console.log("Saved data:", packing);
    res.status(201).json(packing);
  } catch (error) {
    console.error("Error saving packing:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all packing records
router.get("/packings", async (req, res) => {
  try {
    const packings = await Packing.find();
    res.json(packings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific packing record
router.get("/packing/:id", async (req, res) => {
  try {
    const packing = await Packing.findById(req.params.id);
    if (!packing) return res.status(404).json({ message: "Packing not found" });
    res.json(packing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a packing record
router.patch("/packing/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const packing = await Packing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!packing) return res.status(404).json({ message: "Packing not found" });
    res.json(packing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a packing record
router.delete("/packing/:id", async (req, res) => {
  try {
    const packing = await Packing.findByIdAndDelete(req.params.id);
    if (!packing) return res.status(404).json({ message: "Packing not found" });
    res.json({ message: "Packing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

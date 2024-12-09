const BatchId = require("../models/BatchIds");

// Create a new BatchId
exports.createBatchId = async (req, res) => {
  try {
    const { dispensingId } = req.body;

    if (!dispensingId) {
      return res.status(400).json({ message: "dispensingId is required" });
    }

    const newBatchId = new BatchId({ dispensingId });
    const savedBatchId = await newBatchId.save();

    res.status(201).json(savedBatchId);
  } catch (error) {
    console.error("Error creating BatchId:", error);
    res.status(500).json({ message: "Failed to create BatchId" });
  }
};

// Get all BatchIds
exports.getAllBatchIds = async (req, res) => {
  try {
    const batchIds = await BatchId.find().populate("dispensingId");
    res.status(200).json(batchIds);
  } catch (error) {
    console.error("Error fetching BatchIds:", error);
    res.status(500).json({ message: "Failed to fetch BatchIds" });
  }
};

// Get a single BatchId by ID
exports.getBatchIdById = async (req, res) => {
  try {
    const { id } = req.params;
    const batchId = await BatchId.findById(id).populate("dispensingId");

    if (!batchId) {
      return res.status(404).json({ message: "BatchId not found" });
    }

    res.status(200).json(batchId);
  } catch (error) {
    console.error("Error fetching BatchId:", error);
    res.status(500).json({ message: "Failed to fetch BatchId" });
  }
};

// Update a BatchId by ID
exports.updateBatchId = async (req, res) => {
  try {
    const { id } = req.params;
    const { dispensingId } = req.body;

    if (!dispensingId) {
      return res.status(400).json({ message: "dispensingId is required" });
    }

    const updatedBatchId = await BatchId.findByIdAndUpdate(
      id,
      { dispensingId },
      { new: true }
    );

    if (!updatedBatchId) {
      return res.status(404).json({ message: "BatchId not found" });
    }

    res.status(200).json(updatedBatchId);
  } catch (error) {
    console.error("Error updating BatchId:", error);
    res.status(500).json({ message: "Failed to update BatchId" });
  }
};

// Delete a BatchId by ID
exports.deleteBatchId = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBatchId = await BatchId.findByIdAndDelete(id);

    if (!deletedBatchId) {
      return res.status(404).json({ message: "BatchId not found" });
    }

    res.status(200).json({ message: "BatchId deleted successfully" });
  } catch (error) {
    console.error("Error deleting BatchId:", error);
    res.status(500).json({ message: "Failed to delete BatchId" });
  }
};

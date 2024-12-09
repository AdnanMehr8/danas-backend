const express = require("express");
const router = express.Router();
const batchIdController = require("../controllers/batchId");

// Create a new BatchId
router.post("/", batchIdController.createBatchId);

// Get all BatchIds
router.get("/", batchIdController.getAllBatchIds);

// Get a single BatchId by ID
router.get("/:id", batchIdController.getBatchIdById);

// Update a BatchId by ID
router.put("/:id", batchIdController.updateBatchId);

// Delete a BatchId by ID
router.delete("/:id", batchIdController.deleteBatchId);

module.exports = router;

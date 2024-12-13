

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
const BatchInfoQC = require("../models/BatchInfoQc");
const BatchRecordQC = require("../models/MixingQC");
const CompressionQC = require('../models/CompressionQC');

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
router.get("/batch-info", async (req, res) => {
  const { batchNo, productName } = req.query;

  try {
    const batchInfo = await BatchInfo.findOne({
      'batch.batchNo': batchNo, 
      // 'batch.productName': productName 
    });
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

// Create a new batchInfo record
router.post("/batch-info-qc", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new BatchInfoQC(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving batchInfo:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/batches-info-qc", async (req, res) => {
  try {
    const batchInfoes = await BatchInfoQC.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/batch-info-qc", async (req, res) => {
  const { batchNo, productName } = req.query;

  try {
    const batchInfo = await BatchInfoQC.findOne({
      'batch.batchNo': batchNo, 
      // 'batch.productName': productName 
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/batch-info-qc/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await BatchInfoQC.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/batch-info-qc/:id", async (req, res) => {
  try {
    const batchInfo = await BatchInfoQC.findByIdAndDelete(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json({ message: "BatchInfo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new batchInfo record
router.post("/mixing-qc", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new BatchRecordQC(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving batchInfo:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/mixing-qc", async (req, res) => {
  try {
    const batchInfoes = await BatchRecordQC.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/mixing-qc", async (req, res) => {
  const { batchNo, productName } = req.query;

  try {
    const batchInfo = await BatchRecordQC.findOne({
      'batch.batchNo': batchNo, 
      // 'batch.productName': productName 
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/mixing-qc/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await BatchRecordQC.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/mixing-qc/:id", async (req, res) => {
  try {
    const batchInfo = await BatchRecordQC.findByIdAndDelete(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "BatchInfo not found" });
    res.json({ message: "BatchInfo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new batchInfo record
router.post("/compression-qc", async (req, res) => {
  console.log("Received data structure:", JSON.stringify(req.body, null, 2));
  try {
    const batchInfo = new CompressionQC(req.body);
    await batchInfo.save();
    console.log("Saved data:", batchInfo);
    res.status(201).json(batchInfo);
  } catch (error) {
    console.error("Error saving CompressionQC:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all batchInfo records
router.get("/compression-qc", async (req, res) => {
  try {
    const batchInfoes = await CompressionQC.find();
    res.json(batchInfoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific batchInfo record
router.get("/compression-qc", async (req, res) => {
  const { batchNo, productName } = req.query;

  try {
    const batchInfo = await CompressionQC.findOne({
      'batch.batchNo': batchNo, 
      // 'batch.productName': productName 
    });
    if (!batchInfo) return res.status(404).json({ message: "CompressionQC not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a batchInfo record
router.patch("/compression-qc/:id", async (req, res) => {
  try {
    const { id } = req.params; // This should capture the ID correctly
    console.log("Request ID:", id);

    const batchInfo = await CompressionQC.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!batchInfo) return res.status(404).json({ message: "CompressionQc not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a batchInfo record
router.delete("/compression-qc/:id", async (req, res) => {
  try {
    const batchInfo = await CompressionQC.findByIdAndDelete(req.params.id);
    if (!batchInfo) return res.status(404).json({ message: "CompressionQC not found" });
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
router.get("/batch-info-packing", async (req, res) => {
  const { batchNo, productName } = req.query;

  try {
    const batchInfo = await BatchInfoPacking.findOne({
      'batch.batchNo': batchNo, 
      // 'batch.productName': productName 
    });
    if (!batchInfo) return res.status(404).json({ message: "BatchInfoPacking not found" });
    res.json(batchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/batch-info-packing/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const packing = await BatchInfoPacking.findOne({
      'batch.batchNo': batchNo, 
    });
    
    if (!packing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No packing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(packing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

// Save Dispensing Data Route
router.post('/dispensing/save', async (req, res) => {
  try {
    const { 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization, 
      remarks, 
      weighingRecordRaw, 
      checkRecordRaw,
      weighingRecordCoating, 
      checkRecordCoating,
      batchInfo,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let dispensingRecord = await Batch.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!dispensingRecord) {
      // Create new dispensing record if not exists
      dispensingRecord = new Batch({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch(tabValue) {
      case 0: // Line Clearance Tab
        dispensingRecord.batchRecord = batchRecord;
        dispensingRecord.checkboxes = checkboxes;
        dispensingRecord.tempAndHumidity = tempAndHumidity;
        dispensingRecord.authorization = authorization;
        dispensingRecord.remarks = remarks;
        break;

      case 1: // Raw Material Weighing Tab
        dispensingRecord.weighingRecordRaw = weighingRecordRaw;
        dispensingRecord.checkRecordRaw = checkRecordRaw;
        break;

      case 2: // Coating Material Weighing Tab
        dispensingRecord.weighingRecordCoating = weighingRecordCoating;
        dispensingRecord.checkRecordCoating = checkRecordCoating;
        break;

      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedDispensing = await dispensingRecord.save();

    res.status(200).json({
      message: `Dispensing data saved successfully for tab ${tabValue + 1}`,
      dispensingId: savedDispensing._id
    });

  } catch (error) {
    console.error('Error saving dispensing data:', error);
    res.status(500).json({ 
      message: 'Error saving dispensing data', 
      error: error.message 
    });
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
router.get("/dispensing", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const dispensing = await Batch.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!dispensing) return res.status(404).json({ message: "Batch not found" });
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/dispensing/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Batch.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/mixing/save', async (req, res) => {
  try {
    const { 
      precautions, 
      lineClearance, 
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      manufacturingRecord, 
      weightOfGranules,
      granulationYield,
      requestForAnalysisMixing,
      qcHeader,
      batch,
      testAndResults,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let mixingRecord = await Mixing.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!mixingRecord) {
      // Create new dispensing record if not exists
      mixingRecord = new Mixing({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
      case 0: // precautions Tab
        mixingRecord.precautions = precautions;
        mixingRecord.lineClearance = lineClearance;
        
      case 1: // Line Clearance Tab
        mixingRecord.batchRecord = batchRecord;
        mixingRecord.checkboxes = checkboxes;
        mixingRecord.tempAndHumidity = tempAndHumidity;
        mixingRecord.authorization = authorization;
        // mixingRecord.remarks = remarks;
        break;

      case 2: 
        mixingRecord.manufacturingRecord = manufacturingRecord;
        break;

      case 3: 
        mixingRecord.weightOfGranules = weightOfGranules;
        mixingRecord.granulationYield = granulationYield;
        break;
      
        case 4: 
        mixingRecord.requestForAnalysisMixing = requestForAnalysisMixing;
        break;
      
        case 5: 
        mixingRecord.qcHeader = qcHeader;
        mixingRecord.batch = batch;
        mixingRecord.testAndResults = testAndResults;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedMixing = await mixingRecord.save();

    res.status(200).json({
      message: `Mixing data saved successfully for tab ${tabValue + 1}`,
      mixingId: savedMixing._id
    });

  } catch (error) {
    console.error('Error saving mixing data:', error);
    res.status(500).json({ 
      message: 'Error saving mixing data', 
      error: error.message 
    });
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
router.get("/mixing", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const mixing = await Mixing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!mixing) return res.status(404).json({ message: "Mixing record not found" });
    res.json(mixing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/mixing/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Mixing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/compression/save', async (req, res) => {
  try {
    const { 
      precautions, 
      lineClearance, 
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      compressionRecord, 
      compressionSpecifications,
      followUp,
      requestForAnalysis,
      checkSheet,
      weightOfCompressedTablets,
      compressionYield,
      requestForAnalysisEnd,
      qcHeader,
      batch,
      testAndResults,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let compresionRecord = await Compression.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!compresionRecord) {
      // Create new dispensing record if not exists
      compresionRecord = new Compression({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
      case 0: // precautions Tab
        compresionRecord.precautions = precautions;
        compresionRecord.lineClearance = lineClearance;
        
      case 1: // Line Clearance Tab
        compresionRecord.batchRecord = batchRecord;
        compresionRecord.checkboxes = checkboxes;
        compresionRecord.tempAndHumidity = tempAndHumidity;
        compresionRecord.authorization = authorization;
        // compresionRecord.remarks = remarks;
        break;

      case 2: 
        compresionRecord.compressionRecord = compressionRecord;
        break;
      
      case 3: 
      compresionRecord.requestForAnalysis = requestForAnalysis;
        
        break;

      case 4: 
      compresionRecord.compressionSpecifications = compressionSpecifications;
        
        break;
      
      case 5: 
      compresionRecord.followUp = followUp;
        
        break;
      
        case 6: 
        compresionRecord.checkSheet = checkSheet;
        break;
      
      case 7: 
        compresionRecord.weightOfCompressedTablets = weightOfCompressedTablets;
        compresionRecord.compressionYield = compressionYield;
        break;
      
        case 8: 
        compresionRecord.requestForAnalysisEnd = requestForAnalysisEnd;
        break;
      
        case 9: 
        compresionRecord.qcHeader = qcHeader;
        compresionRecord.batch = batch;
        compresionRecord.testAndResults = testAndResults;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedCompression = await compresionRecord.save();

    res.status(200).json({
      message: `Compression data saved successfully for tab ${tabValue + 1}`,
      compressionId: savedCompression._id
    });

  } catch (error) {
    console.error('Error saving compression data:', error);
    res.status(500).json({ 
      message: 'Error saving compression data', 
      error: error.message 
    });
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
router.get("/compression", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const compression = await Compression.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!compression) return res.status(404).json({ message: "compression record not found" });
    res.json(compression);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/compression/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Compression.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/coating/save', async (req, res) => {
  try {
    const { 
      precautions, 
      lineClearance, 
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      coatingSolutionPreparation, 
      coatingProcedure,
      weightOfCoatedTablets,
      batchManufacturingYield,
      requestForAnalysis,
      qcHeader,
      batch,
      testAndResults,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let coatinRecord = await Coating.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!coatinRecord) {
      // Create new dispensing record if not exists
      coatinRecord = new Coating({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
      case 0: // precautions Tab
        coatinRecord.precautions = precautions;
        coatinRecord.lineClearance = lineClearance;
        
      case 1: // Line Clearance Tab
        coatinRecord.batchRecord = batchRecord;
        coatinRecord.checkboxes = checkboxes;
        coatinRecord.tempAndHumidity = tempAndHumidity;
        coatinRecord.authorization = authorization;
        // coatinRecord.remarks = remarks;
        break;

      case 2: 
        coatinRecord.coatingSolutionPreparation = coatingSolutionPreparation;
        coatinRecord.coatingProcedure = coatingProcedure;

        break;
      
      case 3: 
        coatinRecord.weightOfCoatedTablets = weightOfCoatedTablets;
        coatinRecord.batchManufacturingYield = batchManufacturingYield;
        break;
      
        case 4: 
        coatinRecord.requestForAnalysis = requestForAnalysis;
        break;
      
        case 5: 
        coatinRecord.qcHeader = qcHeader;
        coatinRecord.batch = batch;
        coatinRecord.testAndResults = testAndResults;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedCoating = await coatinRecord.save();

    res.status(200).json({
      message: `Coating data saved successfully for tab ${tabValue + 1}`,
      coatingId: savedCoating._id
    });

  } catch (error) {
    console.error('Error saving coating data:', error);
    res.status(500).json({ 
      message: 'Error saving coating data', 
      error: error.message 
    });
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
router.get("/coating", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const coating = await Coating.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!coating) return res.status(404).json({ message: "coating record not found" });
    res.json(coating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/coating/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Coating.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/printing/save', async (req, res) => {
  try {
    const { 
      pHeader,
      docCheckList,
      batchQRecord, 
      batchQRecordSignAndRemarks, 
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      tailLineClearancePrinting, 
      tailLineClearancePrinting2,
      instructions,
      checkSheet,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let printinRecord = await Printing.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!printinRecord) {
      // Create new dispensing record if not exists
      printinRecord = new Printing({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
      case 0: // precautions Tab
      // printinRecord.pHeader = pHeader;  
      printinRecord.docCheckList = docCheckList;
      
      case 1: // precautions Tab
        printinRecord.batchQRecord = batchQRecord;
        printinRecord.batchQRecordSignAndRemarks = batchQRecordSignAndRemarks;
        
      case 2: // Line Clearance Tab
        printinRecord.batchRecord = batchRecord;
        printinRecord.checkboxes = checkboxes;
        printinRecord.tempAndHumidity = tempAndHumidity;
        printinRecord.authorization = authorization;
        // printinRecord.remarks = remarks;
        break;

      // case 3: 
      //   printinRecord.tailLineClearancePrinting = tailLineClearancePrinting;
      //   printinRecord.tailLineClearancePrinting2 = tailLineClearancePrinting2;

      //   break;
      
      case 3: 
        printinRecord.instructions = instructions;
        break;
      
        case 4: 
        printinRecord.checkSheet = checkSheet;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedPrinting = await printinRecord.save();

    res.status(200).json({
      message: `Printing data saved successfully for tab ${tabValue + 1}`,
      printingId: savedPrinting._id
    });

  } catch (error) {
    console.error('Error saving printing data:', error);
    res.status(500).json({ 
      message: 'Error saving printing data', 
      error: error.message 
    });
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
router.get("/printing", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const printing = await Printing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!printing) return res.status(404).json({ message: "Printing not found" });
    res.json(printing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/printing/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Printing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/blistering/save', async (req, res) => {
  try {
    const {  
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      tailLineClearanceBlistering, 
      tailLineClearanceBlistering2,
      instructions,
      checkSheet,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let blisterRecord = await Blistering.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!blisterRecord) {
      // Create new dispensing record if not exists
      blisterRecord = new Blistering({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
        
      case 0: // Line Clearance Tab
        blisterRecord.batchRecord = batchRecord;
        blisterRecord.checkboxes = checkboxes;
        blisterRecord.tempAndHumidity = tempAndHumidity;
        blisterRecord.authorization = authorization;
        // blisterRecord.remarks = remarks;
        break;

      // case 1: 
      //   blisterRecord.tailLineClearanceBlistering = tailLineClearanceBlistering;
      //   blisterRecord.tailLineClearanceBlistering2 = tailLineClearanceBlistering2;

      //   break;
      
      case 1: 
        blisterRecord.instructions = instructions;
        break;
      
        case 2: 
        blisterRecord.checkSheet = checkSheet;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedBlistering = await blisterRecord.save();

    res.status(200).json({
      message: `Blistering data saved successfully for tab ${tabValue + 1}`,
      blisteringId: savedBlistering._id
    });

  } catch (error) {
    console.error('Error saving blistering data:', error);
    res.status(500).json({ 
      message: 'Error saving blistering data', 
      error: error.message 
    });
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
router.get("/blistering", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const blistering = await Blistering.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!blistering) return res.status(404).json({ message: "Blistering not found" });
    res.json(blistering);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/blistering/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Blistering.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

router.post('/packing/save', async (req, res) => {
  try {
    const { 
      batchInfo, 
      batchRecord, 
      checkboxes, 
      tempAndHumidity, 
      authorization,
      tailLineClearancePacking, 
      tailLineClearancePacking2,
      teamSheet,
      checkSheet,
      requestForAnalysisPacking,
      reconcilliationSheet,
      stockTransferReport,
      qcHeader,
      batch,
      testAndResults,
      tabValue 
    } = req.body;

    // Find existing dispensing record or create a new one
    let packinRecord = await Packing.findOne({ 
      'batchInfo.batchNo': batchInfo.batchNo 
    });

    if (!packinRecord) {
      // Create new dispensing record if not exists
      packinRecord = new Packing({
        batchInfo: await BatchInfo.findOne({ batchNo: batchInfo.batchNo }) || batchInfo
      });
    }

    // Update data based on the current tab
    switch (tabValue) {
      case 0: // Line Clearance Tab
        packinRecord.batchRecord = batchRecord;
        packinRecord.checkboxes = checkboxes;
        packinRecord.tempAndHumidity = tempAndHumidity;
        packinRecord.authorization = authorization;
        // packinRecord.remarks = remarks;
        break;

      // case 1: 
      //   packinRecord.tailLineClearancePacking = tailLineClearancePacking;
      //   packinRecord.tailLineClearancePacking2 = tailLineClearancePacking2;

      //   break;
      
      case 1: 
        packinRecord.teamSheet = teamSheet;
        break;
      
        case 2: 
        packinRecord.checkSheet = checkSheet;
        break;
      
        case 3: 
        packinRecord.requestForAnalysisPacking = requestForAnalysisPacking;
        break;
      
        case 4: 
        packinRecord.qcHeader = qcHeader;
        packinRecord.batch = batch;
        packinRecord.testAndResults = testAndResults;
        break;
      
        case 5: 
        packinRecord.reconcilliationSheet = reconcilliationSheet;
        break;
      
        case 6: 
        packinRecord.stockTransferReport = stockTransferReport;
        break;
      default:
        return res.status(400).json({ message: 'Invalid tab value' });
    }

    // Save the updated or new record
    const savedPacking = await packinRecord.save();

    res.status(200).json({
      message: `Packing data saved successfully for tab ${tabValue + 1}`,
      packingId: savedPacking._id
    });

  } catch (error) {
    console.error('Error saving packing data:', error);
    res.status(500).json({ 
      message: 'Error saving packing data', 
      error: error.message 
    });
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
router.get("/packing", async (req, res) => {
  const { batchNo, productName } = req.query;
  try {
    const packing = await Packing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    if (!packing) return res.status(404).json({ message: "Packing not found" });
    res.json(packing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific dispensing record by batch number
router.get("/packing/batch/:batchNo", async (req, res) => {
  const { batchNo } = req.params;
  try {
    const dispensing = await Packing.findOne({
      'batchInfo.batchNo': batchNo, 
    });
    
    if (!dispensing) {
      return res.status(404).json({ 
        status: 'fail',
        message: `No dispensing record found for batch number ${batchNo}` 
      });
    }
    
    res.json(dispensing);
  } catch (error) {
    res.status(500).json({ 
      status: 'fail',
      message: error.message 
    });
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

// Get the latest batchInfo record
router.get("/latest-batch-info", async (req, res) => {
  try {
    const latestBatchInfo = await BatchInfo.findOne().sort({ createdAt: -1 });
    if (!latestBatchInfo) return res.status(404).json({ message: "No batch info found" });
    res.json(latestBatchInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest batchInfo record
router.get("/latest-batch-info-packing", async (req, res) => {
  try {
    const latestBatchInfoPacking = await BatchInfoPacking.findOne().sort({ createdAt: -1 });
    if (!latestBatchInfoPacking) return res.status(404).json({ message: "No batch info found" });
    res.json(latestBatchInfoPacking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest dispensing record
router.get("/latest-dispensing", async (req, res) => {
  try {
    const latestDispensing = await Batch.findOne().sort({ createdAt: -1 });
    if (!latestDispensing) return res.status(404).json({ message: "No dispensing found" });
    res.json(latestDispensing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest mixing record
router.get("/latest-mixing", async (req, res) => {
  try {
    const latestMixing = await Mixing.findOne().sort({ createdAt: -1 });
    if (!latestMixing) return res.status(404).json({ message: "No mixing found" });
    res.json(latestMixing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest compression record
router.get("/latest-compression", async (req, res) => {
  try {
    const latestCompression = await Compression.findOne().sort({ createdAt: -1 });
    if (!latestCompression) return res.status(404).json({ message: "No compression found" });
    res.json(latestCompression);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest coating record
router.get("/latest-coating", async (req, res) => {
  try {
    const latestCoating = await Coating.findOne().sort({ createdAt: -1 });
    if (!latestCoating) return res.status(404).json({ message: "No coating found" });
    res.json(latestCoating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest printing record
router.get("/latest-printing", async (req, res) => {
  try {
    const latestPrinting = await Printing.findOne().sort({ createdAt: -1 });
    if (!latestPrinting) return res.status(404).json({ message: "No printing found" });
    res.json(latestPrinting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest blistering record
router.get("/latest-blistering", async (req, res) => {
  try {
    const latestBlistering = await Blistering.findOne().sort({ createdAt: -1 });
    if (!latestBlistering) return res.status(404).json({ message: "No blistering found" });
    res.json(latestBlistering);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get the latest packing record
router.get("/latest-packing", async (req, res) => {
  try {
    const latestPacking = await Packing.findOne().sort({ createdAt: -1 });
    if (!latestPacking) return res.status(404).json({ message: "No packing found" });
    res.json(latestPacking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

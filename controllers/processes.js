const Process = require('../models/Processes');

exports.getProcesses = async (req, res) => {
  try {
    const { productType, subCategory } = req.query;
    const query = {};
    
    if (productType) query.productType = productType;
    if (subCategory) query.subCategory = subCategory;
    
    const processes = await Process.find(query)
      .sort('order')
      .select('name displayName order');
      
    res.json(processes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Add a new process
// Backend: Add this new function to your controller
exports.addSingleProcess = async (req, res) => {
  try {
    const processData = req.body;
    
    if (!processData.name) {
      return res.status(400).json({ message: 'Name is required for the process.' });
    }

    // Find the highest order number and add 1
    const highestOrder = await Process.findOne({})
      .sort('-order')
      .select('order');
    
    processData.order = highestOrder ? highestOrder.order + 1 : 0;

    const newProcess = new Process(processData);
    const savedProcess = await newProcess.save();
    
    res.status(201).json(savedProcess);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Add multiple processes
exports.addProcesses = async (req, res) => {
  try {
    const processes = req.body; // Expecting an array of processes

    if (!Array.isArray(processes)) {
      return res.status(400).json({ message: 'Invalid input, expected an array of processes.' });
    }

    // Validate each process
    for (let process of processes) {
      if (!process.name) {
        return res.status(400).json({ message: 'Name is required for all processes.' });
      }
    }

    // Save all processes in a single bulk operation
    const savedProcesses = await Process.insertMany(processes);
    res.status(201).json(savedProcesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE: Remove a process by ID
exports.deleteProcess = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProcess = await Process.findByIdAndDelete(id);
    if (!deletedProcess) {
      return res.status(404).json({ message: 'Process not found.' });
    }

    res.json({ message: 'Process deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProcessOrder = async (req, res) => {
  try {
    const { processes } = req.body;
    
    // Update each process order in a transaction
    const session = await Process.startSession();
    session.startTransaction();
    
    try {
      for (let i = 0; i < processes.length; i++) {
        await Process.findByIdAndUpdate(
          processes[i]._id,
          { order: i },
          { session }
        );
      }
      
      await session.commitTransaction();
      res.json({ message: 'Process order updated successfully' });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Update a process by ID (excluding order field)
exports.updateProcess = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove order field if it's included in the update data
    if (updateData.order !== undefined) {
      delete updateData.order;
    }

    // Find and update the process, but don't allow order updates
    const updatedProcess = await Process.findByIdAndUpdate(
      id,
      updateData,
      { 
        new: true, // Return the updated document
        runValidators: true // Run model validations
      }
    );

    if (!updatedProcess) {
      return res.status(404).json({ message: 'Process not found.' });
    }

    res.json(updatedProcess);
  } catch (error) {
    // Handle specific MongoDB validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};
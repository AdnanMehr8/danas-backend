const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    enum: ['regular', 'sulpeol', 'cream'],
    required: true
  },
 

});

// Add index for efficient querying by productType
processSchema.index({ productType: 1 });

module.exports = mongoose.model('Process', processSchema);
// const mongoose = require('mongoose');

// const processSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   productType: {
//     type: String,
//     enum: ['regular', 'sulpeol', 'cream'],
//     required: true
//   },
 

// });

// // Add index for efficient querying by productType
// processSchema.index({ productType: 1 });

// module.exports = mongoose.model('Process', processSchema);

// const mongoose = require('mongoose');

// const ProcessSchema = new mongoose.Schema({
//   category: {
//     type: String,
//     required: true,
//     enum: ['regular', 'sulpeol', 'cream']
//   },
//   processes: [{
//     type: String,
//     required: true
//   }],
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Process', ProcessSchema);

const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   // required: true,
  // },
  name: String,
  displayName: String,
  productType: String,    // 'regular', 'sulpeol', 'cream'
  subCategory: String,    // 'coated', 'non-coated', etc.
  order: Number,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Process', processSchema);

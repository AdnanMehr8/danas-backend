const mongoose = require('../config/dbConfig');

const batchInfoSchema = new mongoose.Schema({
  batch: {
    productName: String,
    batchNo: String,
    batchSize: String,
    noOfPacks: String,
    noOfTablets: String,
    packsSize: String,
    expiryDate: String,
    mfgLicense: String,
    productRegNo: String,
    validFrom: String,
    subCategory: String
  },
});

module.exports = mongoose.model('BatchInfo', batchInfoSchema);
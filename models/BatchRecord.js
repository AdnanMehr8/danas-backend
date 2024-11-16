const mongoose = require('../config/dbConfig');

const batchRecordSchema = new mongoose.Schema({
  batch: {
    id: String,
    productName: String,
    batchNo: String,
    batchSize: String,
    packsSize: String,
    mfgDate: String,
    expiryDate: String,
    status: String,
    noOfPacks: String,
    noOfTablets: String,
    mfgLicense: String,
    productRegNo: String,
    validFrom: String,
  },
});

module.exports = mongoose.model('BatchPlan', batchRecordSchema);
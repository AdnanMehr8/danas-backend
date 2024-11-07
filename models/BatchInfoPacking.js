const mongoose = require('../config/dbConfig');

const batchInfoPackingSchema = new mongoose.Schema({
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
    mrpRs: String,
  },
});

module.exports = mongoose.model('BatchInfoPacking', batchInfoPackingSchema);
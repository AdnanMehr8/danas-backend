const mongoose = require('../config/dbConfig');

const batchRecordQCSchema = new mongoose.Schema({
  qcHeader: {
    docNo: String,
    effectiveDate: String,
    revisionNo: String,
    replaces: String
},
  batch: {
    productName: String,
    batchNo: String,
    qCNo: String,
    batchSize: String,
    packsSize: String,
    mfgDate: String,
    expiryDate: String,
    analysisDate: String,
    sampleType: String,
  },
  testAndResults: {
    parameters: [
      {
        parameters: String,
        specification: String,
        results: String,
      },
    ],
    checkedByQCA: String,
    checkedByQCADate: String,
    checkedByQCM: String,
    checkedByQCMDate: String,
    remarks: String
  },
});

module.exports = mongoose.model('BatchRecordQC', batchRecordQCSchema);
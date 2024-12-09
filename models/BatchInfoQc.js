const mongoose = require('../config/dbConfig');

const batchInfoQCSchema = new mongoose.Schema({
    batch: {
        docNo: String,
        effectiveDate: String,
        revisionNo: String,
        replaces: String
  },
});

module.exports = mongoose.model('BatchInfoQC', batchInfoQCSchema);
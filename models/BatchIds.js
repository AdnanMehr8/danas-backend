
  const mongoose = require('../config/dbConfig');

const batchIdSchema = new mongoose.Schema({
    dispensingId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Dispensing'
      },
});

module.exports = mongoose.model('BatchId', batchIdSchema);
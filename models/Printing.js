const mongoose = require('../config/dbConfig');

const batchQRecordSchema = new mongoose.Schema({
    material: String,
    grnNo: String,
    units: String,
    standard: String,
    actual: String,
    return: String,
    vendor: String,
    inProcess: String,
    totalRejection: String,
    packingStoreSupervisor: String,
    packingSupervisor: String,
});

const Printing = new mongoose.Schema({
    batchRecord: {
        department: String,
        currentProduct: String,
        currentProductBatchNo: String,
        lineClearance: String,
        section: String,
        date: String,
        previousProduct: String,
        previousProductBatchNo: String,
        signature: String,
      },
    checkboxes: {
      remnants: {
        labels: [],
        values: {}
      },
      cleanliness: {
        labels: [],
        values: {}
      }
    },
    tempAndHumidity: {
      temperature: String,
      humidity: String,
      machineUsed: String,
      remarks: String,
    },
    authorization: {
      authorizedForUse: String,
      dateAndTime: String,
    },
    batchQRecord: [batchQRecordSchema],
    batchQRecordSignAndRemarks: {
        remarks: String,
        manufacturingDate: String,
        expiryDate: String,
        packagingStarted: String,
        packagingCompleted: String,
        productionManager: String,
        materialIssuedBy: String,
      materialCheckedAndRecievedBy: String,
      datePM: String,
      dateMIB: String,
      dateCARB: String,

    },
    tailLineClearancePrinting: {
        lineProduct: String,
        lineProductBatchNo: String,
        mfg: String,
        exp: String,
        price: String,
        date: String,
        previousProduct: String,
        previousProductBatchNo: String,
        productionSignature: String,
        qaSignature: String,
        pDate: String,
        qaDate: String
      },
      tailLineClearancePrinting2: {
        lineProduct: String,
        lineProductBatchNo: String,
        mfg: String,
        exp: String,
        price: String,
        date: String,
        previousProduct: String,
        previousProductBatchNo: String,
        productionSignature: String,
        qaSignature: String,
        pDate: String,
        qaDate: String
    },
    instructions: {
        codingOperator: String,
        codingChecker: String,
        productionOfficer: String,
    },
    checkSheet: {
        labels: [
          {
            dateAndTime: String,
            ucOrLabel: String,
            commPackeOrExport: String,
            batchNo: String,
            mfgDate: String,
            expDate: String,
            mrp: String,
            checkedBy: String,
          },
        ],
        dateStarted: String,
        dateCompleted: String,
      },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Printing', Printing);

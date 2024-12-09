const mongoose = require("../config/dbConfig");

const manufacturingRecordSchema = new mongoose.Schema({
  actual: String,
  performedByOperator: String,
  pboDate: String,
  checkedByPO: String,
  checkedByPODate: String,
  checkedByQAI: String,
  checkedByQAIDate: String,
  target: String,
});

const mixingSchema = new mongoose.Schema({
  precautions: {
    area: String,
    sop1: String,
    sop2: String,
    section: String,
    specificArea: String,
    sectionInCharge: String,
    precautionsRead: String,
  },
  lineClearance: [{
    equipment: String,
    equipmentId: String,
    equipmentCapacity: String,
    previousProduct: String,
    batchNo: String,
    cleanedBy: String,
    clDate: String,
    checkedBy: String,
    chDate: String,
    verifiedBy: String,
    vDate: String,
  }],
  batchInfo: {
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
  },
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
    mixingRemarks: String,
  },
  authorization: {
    authorizedForUse: String,
    dateAndTime: String,
  },
  manufacturingRecord: [manufacturingRecordSchema],
  weightOfGranules: {
    containers: [
      {
        containerNo: String,
        grossWeight: String,
        tareWeight: String,
        netWeight: String,
      },
    ],
    total: {
      grossWeight: Number,
      tareWeight: Number,
      netWeight: Number,
    },
    weighedBy: String,
    receivedBy: String,
  },
  granulationYield: {
    labels: [
      {
        sNo: String,
        description: String,
        weight: String,
      },
    ],
    performedBy: String,
    pbDate: String,
  },
  requestForAnalysisMixing: {
    batchInfo: {
      product: String,
      qcNumber: String,
      section: String,
      stage: String,
      batchNumber: String,
      mfgDate: String,
      expDate: String,
      date: String,
      time: String,
      packSize: String,
      sampleQuantity: String,
      weightPerUnit: String,
      bSize: String,
    },
    qa: {
      sampleType: String,
      releaseRequiredFor: String,
      signature: String,
      collectedBy: String,
      dateCollected: String,
      timeCollected: String,
      quantityOfSample: String,
      containerNumbers: String,
    },
    qaObservations: [
      {
        parameter: String,
        statusMixing: String, // OK or Not OK
        remarks: String,
      },
    ],
    qaOfficer: String,
    qaManager: String,
  },
  machineUsed: String,
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
    qcRemarks: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Mixing", mixingSchema);

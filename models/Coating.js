const mongoose = require('../config/dbConfig');

const coatingRecordSchema = new mongoose.Schema({
  temp: String,
  rH: String,
  weightOfGranules: String,
  upperPunch: String,
  lowerPunch: String,
  compressionStartedAt: String,
  completedOn: String,
  sampleTakenQty: String,
  performedByOperator: String,
  checkedByPO: String,
  checkedByQAI: String,
});

const coatingSchema = new mongoose.Schema({
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
  // batchInfo: {
  //   productName: String,
  //   batchNo: String,
  //   batchSize: String,
  //   noOfPacks: String,
  //   noOfTablets: String,
  //   packsSize: String,
  //   expiryDate: String,
  // },
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
    coatingRemarks: String,
  },
  authorization: {
    authorizedForUse: String,
    dateAndTime: String,
  },
  coatingSolutionPreparation: [{
    instructions: String,
    activityCompliance: String,
    sampleTakenQty: String,
    performedByOperator: String,
    pboDate: String,
    checkedByPODate: String,
    checkedByQAIDate: String,
    checkedByPO: String,
    checkedByQAI: String,
  }],
  coatingProcedure:
    [{
      instructions: String,
      activityCompliance: String,
      sampleTakenQty: String,
      performedByOperator: String,
      checkedByPO: String,
      checkedByQAI: String,
      pboDate: String,
      checkedByPODate: String,
      checkedByQAIDate: String,
    }],

  followUp: {
    labels: [
      {
        date: String,
        time: String,
        avgWeight: String,
        thickness: String,
        hardness: String,
        disintigrationTime: String,
        friability: String,
        performedBy: String,
      },
    ],
    zP: String,
    others: String,
    checkedByQA: String,
  },
  requestForAnalysis: {
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
        statusCoating: String, // OK or Not OK
        remarks: String,
      },
    ],
    qaOfficer: String,
    qaManager: String,
  },
  checkSheet: {
    labels: [
      {
        dateAndTime: String,
        weights: [Number],
        avgWeightOf10Tabs: String,
        temp: String,
        rH: String,
        disintigrationTime: String,
        PoOrQoa: String,
      },
    ],
    upperLimit: String,
    targetWeight: String,
    lowerLimit: String,
    dateStarted: String,
    dateCompleted: String,
    remarks: String,
  },
  weightOfCoatedTablets: {
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
  batchManufacturingYield: {
    labels: [
      {
        sNo: String,
        description: String,
        yield: String,
      },
    ],
    performedBy: String,
    performedByDate: String,

  },
  machineUsed: String,

});

module.exports = mongoose.model('Coating', coatingSchema);
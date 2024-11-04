const mongoose = require('../config/dbConfig');

const WeighingRecordSchema = new mongoose.Schema({
    item: String,
    unit: String,
    tareWt: String,
    netWt: String,
    grossWt: String,
  noOfContainers: String,
  machineUsed: String,
});
const CheckRecordSchema = new mongoose.Schema({
    checkedByDispensingPharmacist: String,
    checkedByQAOfficer: String,
    receivedByProductionPharmacist: String,
  receivedBySupervisor: String,
  });
  
  const WeighingRecordCoatingSchema = new mongoose.Schema({
    item: String,
    unit: String,
    tareWt: String,
    netWt: String,
    grossWt: String,
    noOfContainers: String,
    machineUsed: String,
});
const CheckRecordCoatingSchema = new mongoose.Schema({
    checkedByDispensingPharmacist: String,
    checkedByQAOfficer: String,
    receivedByProductionPharmacist: String,
    receivedBySupervisor: String
  });
const BatchSchema = new mongoose.Schema({
    // batchInfo: {
    //   productName: String,
    //   batchNo: String,
    //   batchSize: String,
    //   noOfPacks: String,
    //   noOfTablets: String,
    //   packsSize: String,
    //   expiryDate: String,
    //   mfgLicense: String,
    //   productRegNo: String,
    //   validFrom: String,
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
      cartons: { type: String, default: 'notApplicable' },
      documents: { type: String, default: 'notApplicable' },
      rawMaterial: { type: String, default: 'notApplicable' },
      remnantOfPreviousProduct: { type: String, default: 'notApplicable' },
      area: { type: String, default: 'notApplicable' },
      weighingBalance: { type: String, default: 'notApplicable' },
      dispensingBoard: { type: String, default: 'notApplicable' },
      scoops: { type: String, default: 'notApplicable' },
      pallets: { type: String, default: 'notApplicable' },
      machineUsed: String,
    },
    tempAndHumidity: {
      temperature: String,
      humidity: String,
      machineUsed: String,
    },
    remarks: String,
    authorization: {
      authorizedForUse: String,
      dateAndTime: String,
    },
    weighingRecordRaw: [WeighingRecordSchema],
  checkRecordRaw: {
    checkedByDispensingPharmacist: String,
    dateDP: String,
    checkedByQAOfficer: String,
    dateQA: String,
    receivedByProductionPharmacist: String,
    datePP: String,
    receivedBySupervisor: String,
    dateS: String,
    },
    weighingRecordCoating: [WeighingRecordCoatingSchema],
  checkRecordCoating: {
    checkedByDispensingPharmacist: String,
    dateDP: String,
    checkedByQAOfficer: String,
    dateQA: String,
    receivedByProductionPharmacist: String,
    datePP: String,
    receivedBySupervisor: String,
    dateS: String,
  },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Batch', BatchSchema);

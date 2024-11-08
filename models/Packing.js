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

const Packing = new mongoose.Schema({
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
    tailLineClearancePacking: {
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
      tailLineClearancePacking2: {
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
    teamSheet: {
        labels: [
          {
            name: String,
            process: String,
            timeIn: String,
            timeOut: String,
            timeIn2: String,
            timeOut2: String,
            timeIn3: String,
            timeOut3: String,
          },
        ],
        incharge: String,
        inchargeDate: String,
        packingOfficer: String,
        packingOfficerDate: String
      },
    checkSheet: {
        labels: [
          {
            dateAndTime: String,
            blister: String,
            batchNo: String,
            mfgDate: String,
            expDate: String,
            mrp: String,
            packSize: String,
            directionInsertion: String,
            inner: String,
            label: String,
            bottleOrTube: String,
            ucOrMc: String,
            mcNo: String,
            signedByProductionOrQA: String,
            
          },
        ],
        dateStarted: String,
        dateCompleted: String,
      },
      requestForAnalysisPacking: {
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
            statusPacking: String, // OK or Not OK
            remarks: String,
          },
        ],
        qaOfficer: String,
        qaManager: String,
      },
      reconcilliationSheet: {
        labels: [
          {
            sNo: String,
            description: String,
            reconcillation: String,
          },
        ],
        productionManager: String,
        remarks: String
      },
    stockTransferReport: {
        mfgDate: String,
        expDate: String,
        labels: [
            {
                date: String,
                transferNote: String,
                packSize: String,
                noOfLimitsPack: String,
                noOfMasterCartonPacked: String,
                packingSupervisor: String,
                storeOfficer: String,
            }
        ],
         productionOfficer: String,
          qaOfficer: String
      }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Packing', Packing);

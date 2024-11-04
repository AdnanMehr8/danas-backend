const mongoose = require('../config/dbConfig');

const EquipmentSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: ['LIQUID INJECTION STEROIDAL', 'LIQUID INJECTION GENERAL', 'GENERAL TABLETS', 'GENERAL CAPSULES', 'SEMI-SOLID (CREAM, OINTMENT/GEL)', 'SEMI-SOLID (LOTION)', 'PSYCHOTROPIC TABLETS', 'PACKING HALL', 'WARE-HOUSE']
  },
  equipmentList: [
    {
      S_No: {
        type: Number,
        required: true
      },
      Equipment_Name: {
        type: String,
        required: true
      },
      Make_Mfg_by: {
        type: String,
        required: true
      },
      Capacity: {
        type: String,
        required: true
      },
      Equipment_Code: {
        type: String,
        required: true
      }
    }
  ]
});

const Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports = Equipment;

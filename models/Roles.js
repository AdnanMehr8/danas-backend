const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }] 
  // permissions: [{
  //   module: { type: String, required: true },
  //   actions: [{ type: String }]
  // }]
});

module.exports = mongoose.model('Role', roleSchema);
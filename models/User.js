const mongoose = require('../config/dbConfig');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role: { type: String, enum: ['production', 'admin', 'qa'], required: true },
  role: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["admin", "customer"], default: "customer"}
//   // role: { type: String, enum: ["dispensing pharmacist", "quality-assurance officer, production pharmacist, supervisor"] }
//   // role: { type: String, enum: ["user1", "user2, user3, user4, user5, admin"] }

// });

// module.exports = mongoose.model('User', userSchema);
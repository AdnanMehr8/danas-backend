const mongoose = require('../config/dbConfig');

const departmentSchema = new mongoose.Schema({
    departmentList: [
      {
        name: {
          type: String,
        },
        totalUsers: {
          type: String,
        },
      },
    ],
  });
  
  const Department = mongoose.model('Departments', departmentSchema);
  module.exports = Department;
  
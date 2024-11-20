const express = require('express');
const router = express.Router();
const Department = require('../models/Departments');
const authMiddleware = require('../utils/authMiddleware');
const checkPermission = require('../utils/checkMiddleware');


// Get all departments
router.get('/departments',
    // authMiddleware.auth, 
    // checkPermission('departments', 'read'),
    async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new department
router.post('/departments',
    // authMiddleware.auth, 
    // checkPermission('departments', 'create'),
    async (req, res) => {
    try {
        const newDepartment = new Department({
            departmentList: [{
                name: req.body.name,
                totalUsers: req.body.totalUsers
            }]
        });
        const savedDepartment = await newDepartment.save();
        res.status(201).json(savedDepartment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a department
router.put('/departments/:id',
    // authMiddleware.auth, 
    // checkPermission('departments', 'update'),
    async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        department.departmentList[0].name = req.body.name;
        department.departmentList[0].totalUsers = req.body.totalUsers;

        const updatedDepartment = await department.save();
        res.json(updatedDepartment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a department
// Delete a department
router.delete('/departments/:id',
    // authMiddleware.auth, 
    // checkPermission('departments', 'delete'),
    async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
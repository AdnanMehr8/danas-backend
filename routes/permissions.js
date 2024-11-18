const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissions');
const { auth } = require('../utils/authMiddleware');

router.get('/', permissionController.getAllPermissions);
router.post('/', permissionController.createPermission);
router.put('/:id', permissionController.updatePermission);
router.delete('/:id', permissionController.deletePermission);

module.exports = router;
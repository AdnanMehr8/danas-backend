const express = require('express');
const cors = require('cors');
const userController = require('../controllers/users');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');

// router.use(cors());

router.get('/users', authMiddleware.auth, userController.getUsers );

module.exports = router;
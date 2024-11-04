const express = require('express');
const cors = require('cors');
const { login } = require('../controllers/login');
const { refresh } = require('../controllers/refreshToken');
const { logout } = require('../controllers/logout');
const router = express.Router();

// router.use(cors());

router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token', refresh);


module.exports = router;
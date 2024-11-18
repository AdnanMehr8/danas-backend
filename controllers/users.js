const userService = require('../services/users');
const Role = require('../models/Roles');
const User = require('../models/User');

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.json(users);
        
    } catch (error) {
        res.status(500).json({message: error})
    }    
};


 async function getCurrentUser (req, res) {
    try {
        const user = await User.findById(req.user._id);
        res.json({
            _id: user._id,
            username: user.username,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getUsers, getCurrentUser};
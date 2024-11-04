const userService = require('../services/users');

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.json(users);
        
    } catch (error) {
        res.status(500).json({message: error})
    }    
};

module.exports = {getUsers};
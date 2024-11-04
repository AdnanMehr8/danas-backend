const UserDTO = require('../Dto/userDto');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWTService = require('../utils/jwtUtils');

async function createUser(userData) {
    const { name, email, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        // role: 'customer'
        role
    });

    const savedUser = await createdUser.save();
    const userDto = new UserDTO(savedUser);
    return userDto;
}

module.exports = { createUser };

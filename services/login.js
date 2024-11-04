const UserDTO = require('../Dto/userDto');
const User = require('../models/User');
const JWTService = require('../utils/jwtUtils');
const bcrypt = require('bcrypt');

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error('User Not Found');
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error('Invalid Password');
        }
        const userDto = new UserDTO(existingUser);
        return userDto;
        // return existingUser;
    } catch (error) {
        throw new Error('Invalid Credentials');
    }
}

module.exports = { login };

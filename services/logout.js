const JWTService = require('../utils/jwtUtils');
const RefreshToken = require('../models/Token');


async function logout(refreshToken) {
    try {
        await RefreshToken.deleteOne({ token: refreshToken });
    } catch (error) {
        throw new Error('Error deleting refresh token');
    }
}


module.exports = { logout };
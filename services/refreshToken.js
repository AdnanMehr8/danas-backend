const JWTService = require('../utils/jwtUtils');
const RefreshToken = require('../models/Token');
const User = require('../models/User');
const UserDTO = require('../Dto/userDto');

async function refresh(refreshToken) {
    let userId;

    try {
        userId = JWTService.verifyRefreshToken(refreshToken)._id;
    } catch (error) {
        throw new Error('Invalid or expired refresh token');
    }

    try {
        const tokenRecord = await RefreshToken.findOne({ userId, token: refreshToken });
        if (!tokenRecord) {
            throw new Error('Invalid refresh token');
        }

        const newAccessToken = JWTService.signAccessToken({ _id: userId }, '30m');
        const newRefreshToken = JWTService.signRefreshToken({ _id: userId }, '7d');

        await RefreshToken.updateOne({ userId }, { token: newRefreshToken });

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            userId,
        };
    } catch (error) {
        throw new Error('Error refreshing token');
    }
}

module.exports = { refresh };

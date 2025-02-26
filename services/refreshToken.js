const JWTService = require('../utils/jwtUtils');
const RefreshToken = require('../models/Token');
const User = require('../models/User');
const UserDTO = require('../Dto/userDto');

// In services/refreshToken.js
async function refresh(refreshToken) {
    if (!refreshToken) {
        throw new Error('No refresh token provided');
    }

    try {
        const decoded = JWTService.verifyRefreshToken(refreshToken);
        const userId = decoded._id;

        // Find the token in the database first
        const tokenRecord = await RefreshToken.findOne({ userId, token: refreshToken });
        
        if (!tokenRecord) {
            throw new Error('Invalid refresh token');
        }

        // Generate new tokens
        const newAccessToken = JWTService.signAccessToken({ _id: userId }, '24h');
        const newRefreshToken = JWTService.signRefreshToken({ _id: userId }, '7d');

        // Update the refresh token atomically
        await RefreshToken.findOneAndUpdate(
            { userId },
            { token: newRefreshToken },
            { new: true }
        );
        console.log('Refresh token updated successfully for user:', userId);


        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            userId,
        };
    } catch (error) {
        throw new Error('Error refreshing token', error.message);
    }
}
// async function refresh(refreshToken) {
//     if (!refreshToken) {
//         console.error('No refresh token provided');
//         throw new Error('No refresh token provided');
//     }

//     let userId;

//     try {
//         // userId = JWTService.verifyRefreshToken(refreshToken)._id;
//         const decoded = JWTService.verifyRefreshToken(refreshToken);
//         userId = decoded._id;
//     } catch (error) {
//         console.error('Error verifying refresh token:', error.message);
//         throw new Error('Invalid or expired refresh token');
//     }

//     try {
//         const tokenRecord = await RefreshToken.findOne({ userId, token: refreshToken });
//         console.log('Token: ', tokenRecord)
//         if (!tokenRecord) {
//             console.error('Refresh token not found in database for user:', userId);
//             throw new Error('Invalid refresh token');
//         }

//         const newAccessToken = JWTService.signAccessToken({ _id: userId }, '30m');
//         const newRefreshToken = JWTService.signRefreshToken({ _id: userId }, '7d');

//         await RefreshToken.updateOne({ userId }, { token: newRefreshToken });

        // console.log('Refresh token updated successfully for user:', userId);

//         return {
//             accessToken: newAccessToken,
//             refreshToken: newRefreshToken,
//             userId,
//         };
//     } catch (error) {
//         console.error('Error during token refresh:', error.message);
//         throw new Error('Error refreshing token');
//     }
// }

module.exports = { refresh };

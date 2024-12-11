// // const jwt = require('jsonwebtoken');
// // const { secretKey } = require('../config/jwtConfig');

// // function generateToken (user) {
// //     const payload = {
// //         id: user._id,
// //         email: user.email,
// //         role: user.role
// //     }
// //     return jwt.sign(payload, secretKey, { expiresIn: '1m' });
// // };

// // module.exports = {
// //     generateToken
// // };
const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../config/jwtConfig');
const RefreshToken = require('../models/Token');

class JWTService {
    static signAccessToken(payload, expiryTime) {
        return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: expiryTime });
    }

    static signRefreshToken(payload, expiryTime) {
        return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: expiryTime });
    }

    static verifyAccessToken(token) {
        try {
            return jwt.verify(token, ACCESS_TOKEN_SECRET);
        } catch (error) {
            throw new Error('Invalid or expired access token');
        }
    }

    static verifyRefreshToken(token) {
        try {
            return jwt.verify(token, REFRESH_TOKEN_SECRET);
        } catch (error) {
            throw new Error('Invalid or expired refresh token');
        }
    }

    // static async storeRefreshToken(token, userId) {
    //     try {
    //         await RefreshToken.findOneAndUpdate(
    //             { userId },
    //             { token },
    //             { upsert: true, new: true }
    //         );
    //         console.log('Refresh token updated successfully for user:', userId);
    //     } catch (error) {
    //         console.error('Error storing refresh token:', error);
    //         throw new Error('Error storing refresh token');
    //     }
    // }

     // store refresh token
     static async storeRefreshToken(token, userId) {
        try {
            const newToken = new RefreshToken({
                token: token,
                userId: userId
            });

            // store in db
            await newToken.save();
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = JWTService;

// const jwt = require('jsonwebtoken');
// const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../config/jwtConfig');
// const RefreshToken = require('../models/Token');

// class JWTService {
//     static signAccessToken(payload, expiryTime = '30m') { // Default expiry set to 15 minutes
//         return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: expiryTime });
//     }

//     static signRefreshToken(payload, expiryTime = '7d') { // Default expiry set to 7 days
//         return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: expiryTime });
//     }

//     static verifyAccessToken(token) {
//         try {
//             return jwt.verify(token, ACCESS_TOKEN_SECRET);
//         } catch (error) {
//             console.error('Access token verification error:', error);
//             throw new Error('Invalid or expired access token');
//         }
//     }

//     static verifyRefreshToken(token) {
//         try {
//             return jwt.verify(token, REFRESH_TOKEN_SECRET);
//         } catch (error) {
//             console.error('Refresh token verification error:', error);
//             throw new Error('Invalid or expired refresh token');
//         }
//     }

//     static async storeRefreshToken(token, userId) {
//         try {
//             // Optional: Delete old tokens for the user before saving the new one
//             await RefreshToken.deleteMany({ userId });
            
//             const newToken = new RefreshToken({
//                 token,
//                 userId
//             });

//             await newToken.save();
//             console.log('Refresh token stored successfully for user:', userId);
//         } catch (error) {
//             console.error('Error storing refresh token:', error);
//             throw new Error('Error storing refresh token');
//         }
//     }
// }

// module.exports = JWTService;
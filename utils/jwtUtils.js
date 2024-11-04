// const jwt = require('jsonwebtoken');
// const { secretKey } = require('../config/jwtConfig');

// function generateToken (user) {
//     const payload = {
//         id: user._id,
//         email: user.email,
//         role: user.role
//     }
//     return jwt.sign(payload, secretKey, { expiresIn: '1m' });
// };

// module.exports = {
//     generateToken
// };
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

    static async storeRefreshToken(token, userId) {
        try {
            await RefreshToken.findOneAndUpdate(
                { userId },
                { token },
                { upsert: true, new: true }
            );
        } catch (error) {
            console.error('Error storing refresh token:', error);
            throw new Error('Error storing refresh token');
        }
    }
}

module.exports = JWTService;

const userService = require('../services/signup');
const JWTService = require('../utils/jwtUtils');

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        const accessToken = JWTService.signAccessToken({ _id: user._id }, '24h');
        const refreshToken = JWTService.signRefreshToken({ _id: user._id }, '7d');

        // Store refresh token in DB
        await JWTService.storeRefreshToken(refreshToken, user._id);

        // Send tokens in cookies
        res.cookie('accessToken', accessToken, {
            // maxAge: 1000 * 60 * 30, // 30 minutes
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });

        res.status(201).json({auth: true, user, message: 'User Created Successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createUser };

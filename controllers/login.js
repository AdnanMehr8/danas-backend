const authService = require('../services/login');
const JWTService = require('../utils/jwtUtils');
const RefreshToken = require('../models/Token');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await authService.login(email, password);

        const accessToken = JWTService.signAccessToken({ _id: user._id }, '30m');
        const refreshToken = JWTService.signRefreshToken({ _id: user._id }, '60m');

        // Update or create refresh token in DB
        await JWTService.storeRefreshToken(refreshToken, user._id);

        // Send tokens in cookies
        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 30, // 30 minutes
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });

        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });
        console.log('User: ', user)
        res.json({auth: true, message: 'Login Successfully', user });
    } catch (error) {
        res.status(401).json({ message: 'Invalid Credentials' });
    }
}

module.exports = { login };

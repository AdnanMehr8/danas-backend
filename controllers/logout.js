const authService = require('../services/logout');
const User = require('../models/User');
const UserDTO = require('../Dto/userDto');

async function logout(req, res, next) {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(400).json({ message: 'Refresh token not found' });
        }

        await authService.logout(refreshToken);

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');

        res.status(200).json({ message: 'Logout successful', user: null, auth: false });
    } catch (error) {
        next(error);
    }
}


module.exports = { logout };

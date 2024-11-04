const authService = require('../services/refreshToken');
const User = require('../models/User');
const UserDTO = require('../Dto/userDto');

async function refresh(req, res, next) {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({ message: 'Refresh token not found' });
        }

        const { accessToken, refreshToken: newRefreshToken, userId } = await authService.refresh(refreshToken);

        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 30, // 30 minutes
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });

        res.cookie('refreshToken', newRefreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });

        const user = await User.findById(userId);
        const userDto = new UserDTO(user);

        res.status(200).json({ message: 'Token refreshed successfully', auth: true, user: userDto });
    } catch (error) {
        next(error);
    }
}

module.exports = { refresh };

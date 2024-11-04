// const jwt = require('jsonwebtoken');
// const { secretKey } = require('../config/jwtConfig');

// function authenticateToken(req, res, next) {
//     const authHeader = req.header("Authorization");

//     if (!authHeader) {
//         return res.status(401).json({message: "Unauthorized: Missing Token"});
//     }

//     const [ bearer, token ] = authHeader.split(" ");

//     if (bearer != "Bearer" || !token) {
//         return res.status(401).json({message: "Unauthorized: Invalid Token Format"});
//     }

//     jwt.verify(token, secretKey, (err, user) => {
//         if (err) {
//         return res.status(401).json({message: "Forbidden: Invalid Token or Token Expired"});
//         }

//         req.user = user;
//         next();
//     });
// };




// module.exports = { authenticateToken }
const JWTService = require('../utils/jwtUtils');
const User = require('../models/User');
const UserDTO = require('../Dto/userDto');

const auth = async (req, res, next) => {
    try {
        const { refreshToken, accessToken } = req.cookies;

        if (!refreshToken || !accessToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        let userId;
        try {
            const decoded = JWTService.verifyAccessToken(accessToken);
            userId = decoded._id;
        } catch (error) {
            return res.status(401).json({ message: error.message });
        }

        let user;
        try {
            user = await User.findById(userId);
        } catch (error) {
            return next(error);
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userDto = new UserDTO(user);
        req.user = userDto;
        req.user.role = user.role;

        next();
    } catch (error) {
        next(error);
    }
}

const admin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
    }
    next();
};

const pharmacist = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
    }
    next();
};

const operator = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
    }
    next();
};

const qa_officer = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
    }
    next();
};

module.exports = { auth, admin, operator, pharmacist, qa_officer };

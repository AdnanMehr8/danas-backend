const UserDTO = require('../Dto/userDto');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWTService = require('../utils/jwtUtils');

async function createUser(userData) {
    const { name, email, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        role
    });

    const savedUser = await createdUser.save();
    const userDto = new UserDTO(savedUser);
    return userDto;
}

module.exports = { createUser };
// controllers/userController.js
// const UserDTO = require('../Dto/userDto');
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const JWTService = require('../utils/jwtUtils');

// class UserService {
//   async createUser(userData) {
//     const { name, email, password, roleId } = userData;
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     const createdUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: roleId
//     });

//     const savedUser = await createdUser.save();
//     await savedUser.populate({
//       path: 'role',
//       populate: {
//         path: 'permissions'
//       }
//     });
    
//     const userDto = new UserDTO(savedUser);
//     return userDto;
//   }

//   async getUsers() {
//     const users = await User.find()
//       .populate({
//         path: 'role',
//         populate: {
//           path: 'permissions'
//         }
//       });
//     return users.map(user => new UserDTO(user));
//   }

//   async updateUser(userId, userData) {
//     const { name, email, roleId } = userData;
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { name, email, role: roleId },
//       { new: true }
//     ).populate({
//       path: 'role',
//       populate: {
//         path: 'permissions'
//       }
//     });
//     return new UserDTO(updatedUser);
//   }

//   async deleteUser(userId) {
//     await User.findByIdAndDelete(userId);
//     return { message: 'User deleted successfully' };
//   }
// }

// module.exports = UserService
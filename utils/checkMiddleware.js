// // middleware/checkPermission.js
// const Role = require('../models/Roles');

// const checkPermission = (requiredModule, requiredAction) => {
//     return async (req, res, next) => {
//         try {
//             // Get user's role from the authenticated request
            
//             const userRole = await Role.findOne()
//                 // Add logging to debug
//                 console.log('User role:', userRole);
//                 console.log('Required module:', requiredModule);
//                 console.log('Required action:', requiredAction);
//             console.log('Checking permissions for:', {
//                 userRole,
//                 requiredModule,
//                 requiredAction
//             });
            
//             // Find the role and its permissions
//             const role = await Role.findOne({ name: userRole });
//             console.log('Found role:', role);

//             if (!role) {
//                 return res.status(403).json({ message: 'Role not found' });
//             }
//             console.log('Found role:', role);
//             // Check if the role has the required permission
//             const hasPermission = req.user.role.permissions.some(permission => {
//                 console.log('Checking permission:', permission);
//                 return permission.module === requiredModule &&
//                        permission.actions.includes(requiredAction);
//             });

//             console.log('Has permission:', hasPermission);

//             if (!hasPermission) {
//                 return res.status(403).json({ message: 'Permission denied' });
//             }

//             next();
//         } catch (error) {
//             console.error('Permission check error:', error);
//             res.status(500).json({ message: 'Error checking permissions' });
//         }
//     };
// };

// module.exports = checkPermission;

// middleware/checkPermission.js
// const Role = require('../models/Roles');

// const checkPermission = (requiredModule, requiredAction) => {
//     return async (req, res, next) => {
//         try {
//             // Get user's role from the authenticated request
//             const userRoleName = req.user.role; // This should be the role name string from the user
//             console.log('User role name:', userRoleName);
//             console.log('Required module:', requiredModule);
//             console.log('Required action:', requiredAction);
            
//             // Find the role and populate its permissions
//             const role = await Role.findOne({ name: userRoleName }).populate('permissions');
//             console.log('Found role:', role);

//             if (!role) {
//                 return res.status(403).json({ message: 'Role not found' });
//             }

//             // Check if the role has the required permission
//             const hasPermission = role.permissions.some(permission => {
//                 console.log('Checking permission:', permission);
//                 return permission.module === requiredModule &&
//                        permission.actions.includes(requiredAction);
//             });

//             console.log('Has permission:', hasPermission);

//             if (!hasPermission) {
//                 return res.status(403).json({ message: 'Permission denied' });
//             }

//             next();
//         } catch (error) {
//             console.error('Permission check error:', error);
//             res.status(500).json({ message: 'Error checking permissions' });
//         }
//     };
// };

// module.exports = checkPermission;

const Role = require('../models/Roles');

const checkPermission = (requiredModule, requiredAction) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                console.log('No user found in request');
                return res.status(401).json({ message: 'Authentication required' });
            }

            const userRoleName = req.user.role;
            console.log('User role name:', userRoleName);
            console.log('Required module:', requiredModule);
            console.log('Required action:', requiredAction);

           // Admin role bypass
           if (userRoleName && userRoleName.toLowerCase() === 'admin') {
            console.log('Admin role detected, granting all permissions');
            return next(); // Skip permission checks for admin
        }

            const role = await Role.findOne({ name: userRoleName }).populate('permissions');
            console.log('Found role:', role);

            if (!role) {
                return res.status(403).json({ message: 'Role not found' });
            }

            const hasPermission = role.permissions.some(permission => {
                console.log('Checking permission:', permission);
                return permission.module === requiredModule &&
                       permission.actions.includes(requiredAction);
            });

            console.log('Has permission:', hasPermission);

            if (!hasPermission) {
                return res.status(403).json({ message: 'Permission denied' });
            }

            next();
        } catch (error) {
            console.error('Permission check error:', error);
            res.status(500).json({ message: 'Error checking permissions' });
        }
    };
};

module.exports = checkPermission;
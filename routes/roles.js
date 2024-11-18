const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roles');
// const { auth } = require('../utils/authMiddleware');

router.get('/', roleController.getAllRoles);
router.post('/', roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);
router.get('/:roleName/permissions', roleController.getRolePermissions);
// router.get('/:roleName/permissions', async (req, res) => {
//     try {
//       const { roleName } = req.params;
//       console.log('Fetching permissions for role:', roleName);
      
//       const role = await Role.findOne({ name: roleName });
//       console.log('Found role:', role);
      
//       if (!role) {
//         return res.status(404).json({ message: 'Role not found' });
//       }
  
//       res.json({ permissions: role.permissions });
//     } catch (error) {
//       console.error('Error fetching role permissions:', error);
//       res.status(500).json({ message: error.message });
//     }
//   });


module.exports = router;
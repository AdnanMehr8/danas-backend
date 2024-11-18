// const Role = require('../models/Roles');

// exports.getAllRoles = async (req, res) => {
//   try {
//     const roles = await Role.find().populate('permissions');
//     res.json(roles);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createRole = async (req, res) => {
//   const role = new Role({
//     name: req.body.name,
//     description: req.body.description,
//     permissions: req.body.permissions
//   });

//   try {
//     const newRole = await role.save();
//     res.status(201).json(newRole);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updateRole = async (req, res) => {
//   try {
//     const role = await Role.findById(req.params.id);
//     if (!role) return res.status(404).json({ message: 'Role not found' });
    
//     Object.assign(role, req.body);
//     const updatedRole = await role.save();
//     res.json(updatedRole);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteRole = async (req, res) => {
//   try {
//     const role = await Role.findByIdAndDelete(req.params.id);
//     if (!role) return res.status(404).json({ message: 'Role not found' });
    
//     // await role.remove();
//     res.json({ message: 'Role deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getRolePermissions = async (req, res) => {
//     try {
//         const { roleName } = req.params;
//         const role = await Role.findOne({ name: roleName });
        
//         if (!role) {
//             return res.status(404).json({ message: 'Role not found' });
//         }

//         res.json({ permissions: role.permissions });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// controllers/roleController.js
const Role = require('../models/Roles');
const Permission = require('../models/Permissions');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find().populate('permissions');
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRole = async (req, res) => {
  try {
    // Validate that all permission IDs exist
    const permissions = req.body.permissions;
    if (permissions && permissions.length > 0) {
      const validPermissions = await Permission.find({
        _id: { $in: permissions }
      });

      if (validPermissions.length !== permissions.length) {
        return res.status(400).json({ message: 'Some permission IDs are invalid' });
      }
    }

    const role = new Role({
      name: req.body.name,
      description: req.body.description,
      permissions: permissions
    });

    const newRole = await role.save();
    const populatedRole = await Role.findById(newRole._id).populate('permissions');
    res.status(201).json(populatedRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    // Validate permissions if they're being updated
    if (req.body.permissions) {
      const validPermissions = await Permission.find({
        _id: { $in: req.body.permissions }
      });

      if (validPermissions.length !== req.body.permissions.length) {
        return res.status(400).json({ message: 'Some permission IDs are invalid' });
      }
    }

    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    Object.assign(role, req.body);
    const updatedRole = await role.save();
    const populatedRole = await Role.findById(updatedRole._id).populate('permissions');
    res.json(populatedRole);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.json({ message: 'Role deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRolePermissions = async (req, res) => {
  try {
    const { roleName } = req.params;
    const role = await Role.findOne({ name: roleName }).populate('permissions');
    
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.json({ permissions: role.permissions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
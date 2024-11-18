const Permission = require('../models/Permissions');

exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPermission = async (req, res) => {
  const permission = new Permission({
    name: req.body.name,
    description: req.body.description,
    module: req.body.module,
    actions: req.body.actions
  });

  try {
    const newPermission = await permission.save();
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePermission = async (req, res) => {
  try {
    const permission = await Permission.findById(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    
    Object.assign(permission, req.body);
    const updatedPermission = await permission.save();
    res.json(updatedPermission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePermission = async (req, res) => {
  try {
    const permission = await Permission.findByIdAndDelete(req.params.id);
    if (!permission) return res.status(404).json({ message: 'Permission not found' });
    
    // await permission.remove();
    res.json({ message: 'Permission deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


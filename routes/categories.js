// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Categories');
const Product = require('../models/Products'); // Assuming you have a Product model
const { catchAsync } = require('../utils/errorHandler'); // Assuming you have error handling utility

// Get all categories
router.get('/', catchAsync(async (req, res) => {
  const categories = await Category.find()
    .select('-products') // Exclude products array from response
    .sort('name');
  
  res.status(200).json(categories);
}));

// Get single category by ID
router.get('/:id', catchAsync(async (req, res) => {
  const category = await Category.findById(req.params.id)
    .populate('products');
  
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  
  res.status(200).json(category);
}));

// Create new category
router.post('/', catchAsync(async (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).json({ message: 'Category name is required' });
  }

  // Check if category already exists
  const existingCategory = await Category.findOne({ name: req.body.name });
  if (existingCategory) {
    return res.status(400).json({ message: 'Category already exists' });
  }

  const category = await Category.create({
    name: req.body.name,
    subCategories: req.body.subCategories || []
  });

  res.status(201).json(category);
}));

// Update category
router.put('/:id', catchAsync(async (req, res) => {
  const { name, subCategories } = req.body;
  
  // Check if category exists
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }

  // Check if new name already exists (if name is being changed)
  if (name && name !== category.name) {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'Category name already exists' });
    }
  }

  // Update category
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: name || category.name,
      subCategories: subCategories || category.subCategories
    },
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedCategory);
}));

// Delete category
router.delete('/:id', catchAsync(async (req, res) => {
  const category = await Category.findById(req.params.id);
  
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }

  // Check if category has associated products
  const hasProducts = await Product.exists({ categoryId: req.params.id });
  if (hasProducts) {
    return res.status(400).json({ 
      message: 'Cannot delete category with associated products. Please delete or reassign products first.' 
    });
  }

  await category.remove();
  
  res.status(200).json({ message: 'Category deleted successfully' });
}));

module.exports = router;
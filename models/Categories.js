// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    trim: true,
    unique: true
  },
  subCategories: {
    type: [String],
    default: []
  },
  // Adding a field to track associated products
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true, // This will automatically handle createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add index for better query performance
categorySchema.index({ name: 1 });

// Middleware to update timestamps
categorySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Method to check if category has associated products
categorySchema.methods.hasProducts = function() {
  return this.products.length > 0;
};

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
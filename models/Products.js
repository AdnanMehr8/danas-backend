const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  productList: [
    {
      regNo: String,
      itemId: String,
      categoryDesc: String,
      description: String,
      uom: String,
      packSize: String,
      rate: String,
      retailPrice: String,
      strength: String,
      subCategory: String,
    }
  ]
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  productList: [
    {
      description: String,
      packSize: String,
      subCategory: String,
    }
  ]
});

// const ProductSchema = new mongoose.Schema({
//   productList: [
//     {
//       items: {
//         type: String,
//         // required: true
//       },
//       categoryDesc: {
//         type: String,
//         // required: true
//       },
//       description: {
//         type: String,
//         // required: true
//       },
//       uom: {
//         type: String,
//         // required: true
//       },
//       packSize: {
//         type: String,
//         // required: true
//       },
//       rate: {
//         type: Number,
//         // required: true
//       },
//       retailPrice: {
//         type: Number,
//         // required: true
//       },
//       strength: {
//         type: String,
//         // required: true
//       },
//       groupName: {
//         type: String,
//         // required: true
//       },
//       packsInCarton: {
//         type: Number
//       },
//       active: {
//         type: String,
//         // required: true
//       }
//     }
//   ]
// });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

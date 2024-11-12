const express = require('express');
const Product = require('../models/Products'); // Adjust the path as necessary
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // POST new product
// // POST new product
// router.post('/', async (req, res) => {
//   try {
//     const { categoryId, productList } = req.body;

//     // Check if the categoryId is for Tablets (e.g., categoryId == "2" for tablets)
//     if (categoryId === "2") {  // Assuming "2" is the categoryId for Tablets
//       const validatedProductList = productList.map((product) => {
//         // Set subCategory based on description (e.g., if "Coated" is in the description, set it to "Coated")
//         const subCategory = product.description.includes("Non-Coated") ? "Non-Coated" : "Coated";

//         return {
//           ...product,
//           subCategory
//         };
//       });

//       const newProduct = new Product({
//         categoryId,
//         productList: validatedProductList
//       });

//       const savedProduct = await newProduct.save();
//       res.status(201).json(savedProduct);
//     } else {
//       // For non-tablet categories, do not modify subCategory
//       const newProduct = new Product({
//         categoryId,
//         productList
//       });

//       const savedProduct = await newProduct.save();
//       res.status(201).json(savedProduct);
//     }
//   } catch (err) {
//     console.error('Error saving product:', err);
//     res.status(400).json({ message: err.message });
//   }
// });
router.post('/', async (req, res) => {
  try {
    const { categoryId, productList } = req.body;

    // Check if the categoryId is for Tablets (e.g., categoryId == "2" for tablets)
    if (categoryId === "2") {  // Assuming "2" is the categoryId for Tablets
      const validatedProductList = productList.map((product) => {
        // Use the subCategory from the request payload (don't infer from description)
        const subCategory = product.subCategory;  // Now using the subCategory passed from frontend

        return {
          ...product,
          subCategory: subCategory || "Coated"  // Default to Coated if no subCategory is provided
        };
      });

      const newProduct = new Product({
        categoryId,
        productList: validatedProductList
      });

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } else {
      // For non-tablet categories, do not modify subCategory
      const newProduct = new Product({
        categoryId,
        productList
      });

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    }
  } catch (err) {
    console.error('Error saving product:', err);
    res.status(400).json({ message: err.message });
  }
});

  
// PUT update existing product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    product.regNo = req.body.regNo || product.regNo;
    product.itemId = req.body.itemId || product.itemId;
    product.description = req.body.description || product.description;
    product.categoryDesc = req.body.categoryDesc || product.categoryDesc;
    product.uom = req.body.uom || product.uom;
    product.packSize = req.body.packSize || product.packSize;
    product.rate = req.body.rate || product.rate;
    product.retailPrice = req.body.retailPrice || product.retailPrice;
    product.strength = req.body.strength || product.strength;


    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update existing product in the productList array
router.put('/:parentId/products/:productId', async (req, res) => {
  try {
    const parentProduct = await Product.findById(req.params.parentId); // Find the parent product
    if (!parentProduct) return res.status(404).json({ message: 'Product not found' });

    // Find the product inside the productList array
    const productIndex = parentProduct.productList.findIndex(product => product._id.toString() === req.params.productId);
    if (productIndex === -1) return res.status(404).json({ message: 'Product not found in the product list' });

    // Update the product fields
    const product = parentProduct.productList[productIndex];
    product.regNo = req.body.regNo || product.regNo;
    product.itemId = req.body.itemId || product.itemId;
    product.description = req.body.description || product.description;
    product.categoryDesc = req.body.categoryDesc || product.categoryDesc;
    product.uom = req.body.uom || product.uom;
    product.packSize = req.body.packSize || product.packSize;
    product.rate = req.body.rate || product.rate;
    product.retailPrice = req.body.retailPrice || product.retailPrice;
    product.strength = req.body.strength || product.strength;
    product.subCategory = req.body.subCategory || product.subCategory; // Update subCategory if needed

    // Save the updated product list
    await parentProduct.save();

    res.json(parentProduct); // Return the updated parent product with the updated productList
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE product entry
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
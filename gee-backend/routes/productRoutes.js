const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controllers/productController");
const { productSchema } =require('../validation/product') ;


router.get("/", getAllProducts);
router.get("/:id", getProductById);


    
router.post('/products', async (req, res) => {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    // Proceed to save to MongoDB
  });
  
module.exports = router;
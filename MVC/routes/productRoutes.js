const express = require('express');
const router = express.Router();
const {getProducts,addProduct, updateProduct, deleteProduct} = require('../controllers/productController');



router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;

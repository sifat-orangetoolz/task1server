const router = require('express').Router();
const { addProduct, getProducts, buyProduct } = require('../controllers/productsController');
const { productValidation } = require('../validators/productValidator/productValidator');

router.get('/allProducts', getProducts)

router.post('/addProduct', productValidation, addProduct)
router.post('/buyProduct', buyProduct)




module.exports = router;
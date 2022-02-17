const router = require('express').Router();
const { addProduct, getProducts, buyProduct } = require('../controllers/productsController');
const { checkAuth } = require('../middlewares/checkAuth');
const { statusCheck } = require('../middlewares/checkStatus');
const { productValidation } = require('../validators/productValidator/productValidator');

router.get('/allProducts/', checkAuth, statusCheck, getProducts)

router.post('/addProduct', productValidation, addProduct)
router.post('/buyProduct', buyProduct)




module.exports = router;
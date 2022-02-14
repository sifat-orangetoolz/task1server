const router = require('express').Router();
const { addProduct, getProducts, buyProduct } = require('../controllers/productsController');

router.get('/allProducts', getProducts)

router.post('/addProduct', addProduct)
router.post('/buyProduct', buyProduct)




module.exports = router;
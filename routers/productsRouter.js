const router = require('express').Router();
const { addProduct, getProducts } = require('../controllers/productsController');

router.get('/allProducts', getProducts)

router.post('/addProduct', addProduct)




module.exports = router;
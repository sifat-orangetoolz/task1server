const router = require('express').Router();
const cors = require("cors");
const { paymentIntentRechargePackage, paymentIntentProduct} = require('../controllers/paymentController');


router.post('/create-payment', cors(), paymentIntentRechargePackage)
router.post('/product/create-product-payment', cors(), paymentIntentProduct)




module.exports = router;
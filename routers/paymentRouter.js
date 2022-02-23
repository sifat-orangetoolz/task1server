const router = require('express').Router();
const cors = require("cors");
const { paymentIntentRechargePackage } = require('../controllers/paymentController');
const { checkAuth } = require('../middlewares/checkAuth');


router.post('/create-payment', checkAuth, cors(), paymentIntentRechargePackage)
// router.post('/product/create-product-payment', cors(), paymentIntentProduct)




module.exports = router;
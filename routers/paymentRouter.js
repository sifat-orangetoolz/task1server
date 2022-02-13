const router = require('express').Router();
const cors = require("cors");
const { paymentIntent } = require('../controllers/paymentController');


router.post('/create-payment', cors(), paymentIntent)




module.exports = router;
const router = require('express').Router();
const { addBilling, getBillings } = require('../controllers/billingsController');

router.get('/getBillings', getBillings)

router.post('/addBilling', addBilling)




module.exports = router;
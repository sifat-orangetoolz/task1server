const router = require('express').Router();
const { addPackage, getPackages } = require('../controllers/packagesController');

router.get('/getPackages', getPackages)

router.post('/addPackage', addPackage)




module.exports = router;
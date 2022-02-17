const router = require('express').Router();
const { addPackage, getPackages } = require('../controllers/packagesController');
const { checkAuth } = require('../middlewares/checkAuth');
const { packageValidation } = require('../validators/packageValidator/packageValidator');

router.get('/getPackages/', getPackages)

router.post('/addPackage', packageValidation, addPackage)




module.exports = router;
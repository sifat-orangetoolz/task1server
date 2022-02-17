const router = require('express').Router();
const { getUserById, addUser, Login, getUserBilling } = require('../controllers/usersController');
const { checkAuth } = require('../middlewares/checkAuth');
const { loginValidation } = require('../validators/loginValidator/loginValidator');
const { userValidation } = require('../validators/userValidator/userValidator');

router.post('/addUser', userValidation, addUser)

router.post('/login', loginValidation, Login)

router.get('/getUser', checkAuth, getUserById)
router.get('/getUserBilling', checkAuth, getUserBilling)




module.exports = router;
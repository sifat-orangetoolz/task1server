const router = require('express').Router();
const { getUserById, addUser, Login, getUserBilling } = require('../controllers/usersController');
const { loginValidation } = require('../validators/loginValidator/loginValidator');
const { userValidation } = require('../validators/userValidator/userValidator');

router.post('/addUser', userValidation, addUser)

router.post('/login', loginValidation, Login)

router.get('/getUser/:id', getUserById)
router.get('/getUserBilling/:userId', getUserBilling)




module.exports = router;
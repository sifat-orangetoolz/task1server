const router = require('express').Router();
const { getUserById, addUser, Login, getUserBilling } = require('../controllers/usersController');


router.post('/addUser', addUser)

router.post('/login', Login)

router.get('/getUser/:id', getUserById)
router.get('/getUserBilling/:userId', getUserBilling)




module.exports = router;
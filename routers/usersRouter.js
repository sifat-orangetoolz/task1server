const router = require('express').Router();
const { getUsers, addUser, Login, getUserBilling } = require('../controllers/usersController');


router.post('/addUser', addUser)

router.post('/login', Login)

router.get('/getUsers', getUsers)
router.get('/getUserBilling/:userId', getUserBilling)




module.exports = router;
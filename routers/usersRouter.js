const router = require('express').Router();
const { getUsers, addUser, Login } = require('../controllers/usersController');


router.post('/addUser', addUser)

router.post('/login', Login)

router.get('/getUsers', getUsers)




module.exports = router;
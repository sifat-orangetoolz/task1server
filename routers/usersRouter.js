const router = require('express').Router();
const { checkUser } = require('../controllers/usersController');

router.get('/', (req, res) => {
  res.send("User router is working")
})

router.get('/user', checkUser)




module.exports = router;
// const db = require('../models');
// const User = db.users;
const jwt = require('jsonwebtoken')

async function checkAuth(req, res, next){
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) return res.sendStatus(403)
          req.user = user;
          next()
        })
  
    } catch (error) {
        next(error)
    }


}

module.exports = {
    checkAuth,
}
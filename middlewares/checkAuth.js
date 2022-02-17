const db = require('../models');
const User = db.users;

async function checkAuth(req, res, next){
    try {
        const { id } = req.params;
        const user = await User.findOne({where: {id: id}})
        if(user){
            next();
        }
        else{
            throw new Error('Unauthenticated User');
        }       
    } catch (error) {
        next(error)
    }


}

module.exports = {
    checkAuth,
}
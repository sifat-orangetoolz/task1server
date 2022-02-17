const db = require('../models');
const User = db.users;


async function statusCheck(req, res, next){
    const { id } = req.params;

    let date = new Date();
    const user = await User.findOne({where: {id: id}})
    if(user.balance !==null && user.balance>=100 && ((new Date(user.validity_of_balance)).getTime()>=date.getTime())&&user.validity_of_balance!==null){
        next();
    }
    else{
        next(error)
    }
    


}

// setBalanceStatus(user.balance !==null && user.balance>=100 && ((new Date(user.validity_of_balance)).getTime()>=date.getTime())&& user.validity_of_balance!==null);

module.exports = {
    statusCheck,
}
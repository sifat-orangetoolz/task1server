function statusCheck(req, res, next){
    try {
        const { id, balance, validity_of_balance } = req.user;
        let date = new Date();
        // const user = await User.findOne({where: {id: id}})
        if(balance !==null && balance>=100 && ((new Date(validity_of_balance)).getTime()>=date.getTime())&&validity_of_balance!==null){
            next();
        }
        else{
            throw new Error('Balance Insufficient');
        }       
    } catch (error) {
        next(error)
    }
    


}

// setBalanceStatus(user.balance !==null && user.balance>=100 && ((new Date(user.validity_of_balance)).getTime()>=date.getTime())&& user.validity_of_balance!==null);

module.exports = {
    statusCheck,
}
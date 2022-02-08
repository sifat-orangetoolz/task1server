//Registration of o new user
async function checkUser(req, res, next) {
    try {
        res.send("User controller is working")   
    } catch (error) {
      next(error);
    }
  }



module.exports = {
    checkUser,
}
  
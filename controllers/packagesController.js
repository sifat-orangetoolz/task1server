const db = require('../models')


// create main Model
const Package = db.packages
const User = db.users


//Add product
async function addPackage(req, res, next) {
    try {
        const package = await Package.create(req.body)
        res.status(200).json(package)
    } catch (error) {
      next(error);
    }
  }

async function getPackages(req, res, next) {
    try {
      let { id } = req.user;
      // console.log(req.user)
      let packages = await Package.findAll({})

      const user = await User.findOne({
        where: id
      })
      res.status(200).json({
        data: packages,
        userBalance: user.balance 
      })

    } catch (error) {
      next(error);
    }
  }




module.exports = {
  addPackage,
  getPackages,
}
  
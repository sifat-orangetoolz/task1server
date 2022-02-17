const db = require('../models')


// create main Model
const Package = db.packages


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
      let { balance } = req.user;
      console.log(req.user)
      let packages = await Package.findAll({})
      res.status(200).json({
        data: packages,
        userBalance: balance 
      })

    } catch (error) {
      next(error);
    }
  }




module.exports = {
  addPackage,
  getPackages,
}
  
const db = require('../models')


// create main Model
const Billing = db.billings


//Add product
async function addBilling(req, res, next) {
    try {
        const billing = await Billing.create(req.body)
        res.status(200).json(billing)
        console.log(billing) 
    } catch (error) {
      next(error);
    }
  }

async function getBillings(req, res, next) {
    try {
      let billings = await Billing.findAll({})
      res.status(200).json(billings)

      console.log(billings)

    } catch (error) {
      next(error);
    }
  }




module.exports = {
    addBilling,
    getBillings,
}
  
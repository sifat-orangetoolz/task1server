const db = require('../models')


// create main Model
const Product = db.products


//Add product
async function addProduct(req, res, next) {
    try {
      const product = await Product.create(req.body)
      res.status(200).json(product)
      console.log(product)

    } catch (error) {
      next(error);
    }
  }

async function getProducts(req, res, next) {
    try {
      let products = await Product.findAll({})
      res.status(200).json(products)

      console.log(products)

    } catch (error) {
      next(error);
    }
  }




module.exports = {
  addProduct,
  getProducts,
}
  
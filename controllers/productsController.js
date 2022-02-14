const { billings } = require('../models')
const db = require('../models')


// create main Model
const Product = db.products
const Billing = db.billings
const User = db.users


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

  async function buyProduct(req, res, next) {
    try {
      const { user_id, amount } = req.body;
      let user = await User.findOne({where: {id: user_id}})
      if(user.balance < amount ){
        res.status(400).json({
          message: "Insufficient Balance"
        })
        
      }
      else{
          let billing = Billing.create(req.body)

          let user = await User.findOne({where: {id: user_id}})
    
          const newBalance = Number(user.balance) - Number(amount);     
    
          const updatedBalance = await User.update({
              balance: newBalance,   
          },
          {
              where: {
                  id: Number(user_id)
              }
          }    
          );  
          res.status(200).json({
            message: "Product Bought Successfully"
          })

      }


    } catch (error) {
      next(error);
    }
  }




module.exports = {
  addProduct,
  getProducts,
  buyProduct,
}
  
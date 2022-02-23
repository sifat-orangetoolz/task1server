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
      const { id } = req.user;
      let products = await Product.findAll({})

      const user = await User.findOne({
        where: id

      })
      res.status(200).json({
        data: products,
        balance: user.balance,
        userId: id
      })

    } catch (error) {
      next(error);
    }
  }

async function buyProduct(req, res, next) {
    try {
      const { product_id, description, amount } = req.body;

      const { id } = req.user;
      console.log(id)
      let user = await User.findOne({where: {id}})
      if(user.balance < Number(amount) ){
        res.status(400).json({
          message: "Insufficient Balance"
        })
        
      }
      else{
          let billing = Billing.create({
            amount,
            description,
            user_id: id,
            product_id

          })

          let user = await User.findOne({where: {id: id}})
    
          const newBalance = Number(user.balance) - Number(amount); 
          console.log(newBalance)    
    
          const updatedBalance = await User.update({
              balance: newBalance,   
          },
          {
              where: {
                  id: Number(id)
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
  
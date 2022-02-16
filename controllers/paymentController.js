const db = require('../models')
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);


// create main Model
const Billing = db.billings
const User = db.users


//Payment for Recharge package
async function paymentIntentRechargePackage(req, res, next) {
    try {
        let { packageId, userId, amount, id, title, validity } = req.body;
        console.log(req.body)
        try {
          const payment = await stripe.paymentIntents.create({
            amount: Number(amount)*100,
            currency: "USD",
            description: "Your Company Description",
            payment_method: id,
            confirm: true,
          });



          const billingToBeAdded = await Billing.create({
            amount: amount,
            description: title,
            user_id: Number(userId),
            package_id: Number(packageId)
            
        });

        // console.log(billingToBeAdded)
        let user = await User.findOne({ where: { id: userId }});
        
        const newBalance = Number(user.balance) + Number(amount);

        let newValidity;
        if(user.validity_of_balance === null){
          let date = new Date();
           newValidity = date.setDate(date.getDate() + Number(validity));
        }
        else{
            const existingDate = new Date(user.validity_of_balance)
            newValidity = new Date(existingDate.setDate(existingDate.getDate() + Number(validity)));
        }
        

        const updatedBalance = await User.update({
            balance: newBalance,
            validity_of_balance: newValidity       
        },
        {
            where: {
                id: Number(userId)
            }
        }    
        );

          res.json({
            message: "Payment Successful",
            success: true,
          });


        } catch (error) {
          console.log("stripe-error", error);
          res.json({
            message: "Payment Failed",
            success: false,
          });
        }

    } catch (error) {
      next(error);
    }
  }

//Payment Intent for product
// async function paymentIntentProduct(req, res, next) {
//   try {
//       let { productId, userId, amount, id, title } = req.body;
//       try {
//         const payment = await stripe.paymentIntents.create({
//           amount: Number(amount)*100,
//           currency: "USD",
//           description: "Your Company Description",
//           payment_method: id,
//           confirm: true,
//         });



//         const billingToBeAdded = await Billing.create({
//           amount: amount,
//           description: title,
//           user_id: Number(userId),
//           product_id: Number(productId)
          
//       });

//       // console.log(billingToBeAdded)
//       let user = await User.findOne({ where: { id: userId }});
      
//       const newBalance = Number(user.balance) - Number(amount);     

//       const updatedBalance = await User.update({
//           balance: newBalance,   
//       },
//       {
//           where: {
//               id: Number(userId)
//           }
//       }    
//       );

//         res.json({
//           message: "Payment Successful",
//           success: true,
//         });


//       } catch (error) {
//         console.log("stripe-error", error);
//         res.json({
//           message: "Payment Failed",
//           success: false,
//         });
//       }

//   } catch (error) {
//     next(error);
//   }
// }




module.exports = {
  paymentIntentRechargePackage,
}
  
const bcrypt = require('bcrypt');
const db = require('../models')
const jwt = require("jsonwebtoken");
const createError = require("http-errors");


// create main Model
const User = db.users
const Billing = db.billings



//Registration of o new user
async function getUserById(req, res, next) {
    try {
      const { id } = req.user;
      console.log(typeof(id))
      let user = await User.findOne({where: {id: id}})
      res.status(200).json(user) 
    } catch (error) {
      next(error);
    }
  }


async function addUser(req, res, next) {
    try {
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        ...req.body,
        password: hashedPassword
      }
      const user = await User.create(newUser)
      res.status(200).json(user)
      console.log(user)

    } catch (error) {
      next(error);
    }
  }

//User login
async function Login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
     where: { 
        email: email,
     }
    });

    if (user.password) {
      const isValidPassword = await bcrypt.compare(
        password,
        user.password
      );
      if (isValidPassword) {
        // const userObject = {
        //   id: user.id,
        //   name: user.name,
        //   email: user.email,
        //   balance: user.balance,
        //   validity_of_balance: user.validity_of_balance,
        // };

        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            balance: user.balance,
            validity_of_balance: user.validity_of_balance
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '86400000',
          }
        );

        res.status(200).json({
          token: token,
          message: "User Logged In successfully!",
        });
      } else {
        throw createError("Login failed! Please try again.");
      }
    } else {
      throw createError("Login failed! Please try again.");
    }
  } catch (err) {
    next(err);
  }
}

async function getUserBilling(req, res, next){
  try {
    const { id } = req.user;
    
    const data = await User.findOne({
      include: [{
          model: Billing,
          as: 'billing'
      }],
      where: { id: id }
  })

  res.status(200).send(data);
  console.log(data)
    
  } catch (error) {
      next(error)
  }
}




module.exports = {
    getUserById,
    addUser,
    Login,
    getUserBilling,
}
  
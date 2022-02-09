const bcrypt = require('bcrypt');
const db = require('../models')
const createError = require("http-errors");


// create main Model
const User = db.users



//Registration of o new user
async function getUsers(req, res, next) {
    try {
      let users = await User.findAll({})
      res.status(200).json(users)

      console.log(users)   
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
    let paymentStatus
    if(user.balance>0&&user.validity_of_balance>0){
      paymentStatus = 'balance ok';
    }
    else{
      paymentStatus = 'insufficient balance'
    }

    if (user.password) {
      const isValidPassword = await bcrypt.compare(
        password,
        user.password
      );
      if (isValidPassword) {
        const userObject = {
          id: user.id,
          name: user.name,
          email: user.email,
          balance: user.balance,
          validity_of_balance: user.validity_of_balance,
          paymentStatus
        };
        res.status(200).json({
          user: userObject,
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




module.exports = {
    getUsers,
    addUser,
    Login,
}
  
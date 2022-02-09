//External Imports
const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));


//internal imports
const userRouter = require('./routers/usersRouter');
const productsRouter = require('./routers/productsRouter');
const packagesRouter = require('./routers/packagesRouter')


app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

app.use('/users', userRouter)
app.use('/products', productsRouter)
app.use('/packages', packagesRouter)

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
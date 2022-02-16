const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        

    price: Joi.number()
        .min(50).required(),

})

const productValidation = (req, res, next) => {
    const { error, value } = productSchema.validate(req.body);
    {
        if(error === undefined){
            next()
        }
        else{
            next(error)
        }
    }
}

module.exports = {
    productValidation
}
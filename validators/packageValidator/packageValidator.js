const Joi = require('joi');

const packageSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        

    price: Joi.number()
        .min(2).max(15).required(),

})

const packageValidation = (req, res, next) => {
    const { error, value } = packageSchema.validate(req.body);
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
    packageValidation
}
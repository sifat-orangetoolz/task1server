const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .min(3).max(15).required(),

})

const userValidation = (req, res, next) => {
    const { error, value } = userSchema.validate(req.body);
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
    userValidation
}
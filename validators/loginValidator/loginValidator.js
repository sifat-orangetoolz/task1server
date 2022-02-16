const Joi = require('joi');

const loginSchema = Joi.object({     

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .min(3).max(15).required(),

})

const loginValidation = (req, res, next) => {
    const { error, value } = loginSchema.validate(req.body);
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
    loginValidation
}
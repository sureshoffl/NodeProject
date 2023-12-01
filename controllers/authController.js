const Joi = require('joi');
const authService = require('../services/authService');
const brcypt = require('bcrypt');


module.exports.signUp = async (req, res) => {
    try {
        const signupSchema = Joi.object( {
            username : Joi.string().required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(8).required(),
            mobilenumber : Joi.string().required(),
            address : Joi.string().optional()   
        });
        
        const { error } = signupSchema.validate(req.body);
        if (error) {
            return res.send({
                message : error.message
            })
        }
        else {
            res.send({
                status : true,
                message : 'User Added Successfully      '
            })
        } 
        const result = await authService.signUp(req.body);
        
        console.log(result);
        if (result) {
        return res.send({
            status : true,
            message : result
        })    
        }
        
    } catch (error) {
        console.log(error, 'Error occured');
    }
    return res.send({
        status : false, 
        message : 'Signup failed'
    })
}
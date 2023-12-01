const router = require('../routes/route');
const authController =  require('../controllers/authController');
const db = require('../config/db');
const knex  = require('knex');
const bcrypt = require('bcrypt');



module.exports.signUp = async (data) => {
    try {
        const { username, email, password, mobilenumber, address } = data
        const hashpassword = bcrypt.hashSync(password, 10);
        const result =  await db('users').insert({username, email, mobilenumber,  address, password:hashpassword});
        console.log(result);
        return result
       
    } catch (error) {
        console.log(error);
    }
}

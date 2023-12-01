const router =  require('express').Router();
const authController = require('../controllers/authController');


router.get('/', (req, res) => {
    res.send('Nodejs Server Connected')
});

router.post('/signUp', authController.signUp);


module.exports = router;
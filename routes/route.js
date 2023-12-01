const router =  require('express').Router();
const authController = require('../controllers/authController')

router.get('/', (req, res) => {
    res.send('Nodejs Server Connected')
})

module.exports = router;
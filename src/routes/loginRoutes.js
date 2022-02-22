const router = require('express').Router();
const loginrouter = require('../controllers/loginController')

router.get('/',loginrouter.getData)
router.post('/',loginrouter.loginUser)

module.exports = router
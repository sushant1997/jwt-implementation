const router = require('express').Router();
const registrationrouter = require('../controllers/registrationController')

router.get('/',registrationrouter.getData)
router.post('/',registrationrouter.create)


module.exports = router
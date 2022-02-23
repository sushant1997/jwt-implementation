const router = require('express').Router();
const incomerouter = require('../controllers/incomeController')
const jwt_validation = require('../utils/jwt')

router.get('/', jwt_validation.validateToken, incomerouter.getPage)
router.post('/',incomerouter.Save)



module.exports = router;

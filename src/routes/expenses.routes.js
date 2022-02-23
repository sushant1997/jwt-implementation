const router = require('express').Router();
const expensesrouter = require('../controllers/expensesController')
const jwt_validation = require('../utils/jwt')

router.get('/', jwt_validation.validateToken, expensesrouter.getPage)
router.post('/',expensesrouter.create)

module.exports = router;

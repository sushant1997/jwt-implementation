const router = require('express').Router();
const expensesrouter = require('../controllers/expensesController')

router.get('/',expensesrouter.getPage)
router.post('/',expensesrouter.create)

module.exports = router;

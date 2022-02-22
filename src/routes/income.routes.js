const router = require('express').Router();
const incomerouter = require('../controllers/incomeController')

router.get('/',incomerouter.getPage)
router.post('/',incomerouter.Save)



module.exports = router;

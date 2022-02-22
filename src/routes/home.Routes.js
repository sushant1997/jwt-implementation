const router = require('express').Router();
const homeC =require('../controllers/homeController')

router.get('/',homeC.getData)




module.exports = router
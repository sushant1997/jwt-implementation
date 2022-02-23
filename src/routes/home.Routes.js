const router = require('express').Router();
const homeC =require('../controllers/homeController')
const jwt_validation = require('../utils/jwt')

router.get('/',jwt_validation.validateToken, homeC.getData)




module.exports = router
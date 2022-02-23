const {sign, verify} = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const createToken = async(user) =>{
    const accessToken = await sign({username: user.username, id: user.id}, process.env.token_secret)
    return accessToken;
}

const validateToken = async(req, res, next) =>{
   const accessToken = await req.cookies['access-token'];
   if(!accessToken){
       res.send(`User not authenticated`)
   }
   try{
       const validateToken = verify(accessToken,  process.env.token_secret)
       if(validateToken){
           req.authenticated = true;
           next();
       }
   }catch(e){
       console.log('error : ' + e)

   }

}


module.exports ={
    createToken, validateToken
}
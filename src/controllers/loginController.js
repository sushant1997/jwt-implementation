const {User} = require('../../models/index');
const comparedPassword = require('../utils/bcrypt')
const jwt = require('../utils/jwt')

const getData = async(req, res)=>{
    try{
        res.render('login');
    }catch(e){
        console.log(e);
    }
}

const loginUser = async(req, res) =>{

    try{

    const {email, password} = req.body
    const user = await User.findOne({where:{email:email} })
  
    if(!user) console.log(`User dosen't exist`);

    const dbPassword = user.password;
    
    const matching = await comparedPassword.passwordComparison(password, dbPassword)

    if (!matching){
        console.log(`Incorrect username, email or password!`);
    }else{
        const accessToken = await jwt.createToken(user)
        await res.cookie("access-token",accessToken,{
            maxAge: 300000
        })

        await res.render('home')
        console.log(`User loged in.`)
    }

    }catch(e){
        console.log(e);
    }
}


module.exports = {getData, loginUser}
const {User} = require('../../models/index');
const hashedPassword = require('../utils/bcrypt') 


const getData = async(req, res) =>{
    try{
        res.render('registration');
    }catch(e){
        console.log(e);
    }
}

const create = async(req, res) => {
    try{
    const {username, email , password} = req.body;
    const Password = await  hashedPassword.passHass(password);
    await User.create({
        username,
        email,
        password:Password
    });
    res.render('login');
    }catch(e){
        console.log('The error is ' + e);
    }    
}

module.exports = {create, getData}
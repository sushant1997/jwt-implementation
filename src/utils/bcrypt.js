const bcrypt = require('bcrypt')
const {Users} = require('../../models/index');

const passHass = async(password)=>{
    const salt =await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}


const passwordComparison = async(password, dbPassword) =>{
  const match = await bcrypt.compare(password, dbPassword);
  return match;
}


module.exports = {passHass, passwordComparison}
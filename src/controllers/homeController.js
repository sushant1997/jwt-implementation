const {Income, Expense} = require('../../models/index');

const getData = async(req, res) => {
    try{
            
            await res.render('home')
    }catch(e){
        console.log(e)
    }  
    
}
// const getExpenses = async(req, res) => {
//     try{
//             const expense = await Expense.findAll({raw: true})
//             await res.render('home',{expense});
//     }catch(e){
//         console.log(e)
//     }  
    
// }


module.exports = {getData}
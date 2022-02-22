const {Expense} = require('../../models/index');

const getPage = async(req, res)=>{

    try{
        const expense = await Expense.findAll({raw: true})
        await res.render('expenses',{expense});
}catch(e){
    console.log(e)
} 
    
}


const create = async(req, res) =>{
    try{
        
    const {source, categories, amount } = req.body;
    await Expense.create({ source, categories, amount });
    res.redirect('home')

    }catch(e){
        console.log(e)
    }
}


module.exports ={
   getPage, create
}
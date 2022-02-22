const {Income} = require('../../models/index');


const getPage = async(req, res)=>{

    try{
        const income = await Income.findAll({raw: true})
        await res.render('income',{income});
}catch(e){
    console.log(e)
}  
    
}


const Save = async(req, res) =>{
    try{
        
    const {source, categories, amount } = req.body;
    await Income.create({ source, categories, amount });
    res.redirect('home')

    }catch(e){
        console.log(e)
    }
}


module.exports ={
   getPage, Save
}
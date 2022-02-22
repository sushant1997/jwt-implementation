const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const homeroute = require('./routes/home.Routes')
const incomeroutes = require('./routes/income.routes');
const expensesroutes = require('./routes/expenses.routes')
const registrationroutes = require('./routes/registrationRoutes')
const loginroutes = require('./routes/loginRoutes')

const app = express();




app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use('/home',homeroute)
app.use('/income',incomeroutes)
app.use('/expenses',expensesroutes)
app.use('/registration', registrationroutes)
app.use('/login', loginroutes )


app.listen(PORT,(err) => {
    if(err){
        throw err;
    }else{
        console.log(`Server running on http://localhost:${PORT}`)
    }
})
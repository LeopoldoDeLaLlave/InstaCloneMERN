require('dotenv').config();
const express = require('express');
const app = express();


const PORT = 5000;

require('./database');


//Middlewares

app.use(express.json());

const customMiddleware=(req, res, next)=>{
    console.log("middleware");
    next();
}

app.use(customMiddleware);


//Routes
app.use(require('./routes/auth'));


app.get('/about',(req, res)=>{
    res.send('about');
});


//Server
app.listen(PORT,()=>{
    console.log("Server in port ", PORT);
}); 
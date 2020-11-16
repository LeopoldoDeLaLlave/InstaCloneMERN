require('dotenv').config();
const express = require('express');
const app = express();


const PORT = 5000;

require('./database');


//Middlewares

app.use(express.json());




//Routes
app.use(require('./routes/auth'));
app.use(require('./routes/post'));





//Server
app.listen(PORT,()=>{
    console.log("Server in port ", PORT);
}); 
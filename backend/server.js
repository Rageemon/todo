const express = require('express');
require('dotenv').config();
console.log(process.env);
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require("cors");
const todoRouter = require('./routes/todoRoutes');

const app = express();
app.use(bodyparser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ToDo")
.then(() => {
    console.log("Connected!")
})
.catch(() =>{
    console.log("Error!")
})

app.use('/api',todoRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at ${process.env.PORT}`);
})
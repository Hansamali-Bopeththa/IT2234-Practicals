const express = require('express');
const app = express();
const port = 3002;
const mongoose = require('mongoose')
const coursert = require('./routes/courseRoute')
const studentrt = require('./routes/studentRoute')
const degreert = require('./routes/degreeRoute')

app.use(express.json())
app.use('/course',coursert)
app.use('/student',studentrt)
app.use('/degree',degreert)

mongoose.connect('mongodb://localhost:27017/StudentinfoDB').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
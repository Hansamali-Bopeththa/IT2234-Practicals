const express=require('express'); 
const app=express();
const port=3002;
const mongoose = require('mongoose')
app.use(express.json()) 

const departmentRoute=require('./routes/departmentRoute') 
const employeeRoute=require('./routes/employeeRoute')
const projectRoute=require('./routes/projectroute')
const etfRoute=require('./routes/etfroute')

app.use('/department',departmentRoute)  
app.use('/employee',employeeRoute)
app.use('/etf',etfRoute)
app.use('/project',projectRoute)

mongoose.connect('mongodb://localhost:27017/CompanyDB').then(()=> 
{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})


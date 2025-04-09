const express=require('express');
const app=express();
const port=3001;

const userRoute=require('./users/userroute')
const commentRoute = require('./comments/commentroute')

app.use(express.json())
app.use('/users',userRoute)
app.use('/comments',commentRoute);

app.listen(port,()=>{
    console.log(`Service running on ${port}`);
})
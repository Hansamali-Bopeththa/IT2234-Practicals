const express=require('express');
const router=express.Router()
const userService=require('./userservice')

router.get('/', (req,res)=>{
    try{
        const results=userService.getusers()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")

    }
})

router.get('/:id',(req,res)=>{
    try{
    const id=req.params.id
    const results=userService.getUser(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
    }   

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/summary/:id',(req,res)=>{
    try{
    const id=req.params.id
    const results=userService.getUserSummary(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
    }   

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

   



module.exports= router
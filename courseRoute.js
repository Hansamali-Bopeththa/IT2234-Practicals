const express=require('express')
const router=express.Router()
const Course=require('../models/Course')

router.get('/',async (req,res)=>{
    try{
        const results = await Course.find()
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const id=req.params.id
        const results = await Course.findById(id)
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.get('code/:cid',async (req,res)=>{
    try{
        const id=req.params.cid
        const results = await Course.find({code:cid})
        if (results == null) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})
module.exports=router
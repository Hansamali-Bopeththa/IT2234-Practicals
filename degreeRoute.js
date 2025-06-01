const express=require('express')
const router=express.Router()
const Degree=require('../models/Degree')
const { default: mongoose } = require('mongoose')

router.get('/',async (req,res)=>{
    try{
        const results = await Degree.find()
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
/*
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

router.post('/',async (req,res)=>{
    try{
        const {code,name,credits,descriptions}=req.body
    
         if(!code || !name || !credits){
            res.status(400).send("Please provide the required fields!")

         }else{
            const results = await Course.create({code,name,credits,descriptions})
            res.status(200).json(results)

         }

    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const id=req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }

        const ucourse=await Course.findById(id)
        const {code,name,credits,descriptions}=req.body
    
         if(!code || !name || !credits){
            res.status(400).send("Please provide the required fields!")

         }else{
            const results = await Course.create({code,name,credits,descriptions})
            res.status(200).json(results)

         }

    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.delete('/:id',async (req,res)=>{
    try{
        const id=req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }

        const dcourse=await Course.findById(id)
        const results = await dcourse.deleteOne(dcourse).catch(
            (error)=>{return res.status(500).json(error)}
        )
        res.status(200).json(results)

    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})
    */
module.exports=router
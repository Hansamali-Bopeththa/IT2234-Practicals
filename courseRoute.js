const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Course.find()
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await Course.findById(id)
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/code/:cid',async(req,res)=>{
    try{
        const cid = req.params.cid
        const results = await Course.find({code:cid})
        const count = results.length
        console.log(count)
        if(results) {
           if(count>0){
                res.status(200).json(results)
           }else{
            res.status(404).send("Sorry, no data found!")
           }
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

//insert

router.post('/',async(req,res)=>{
    try{
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Course.create({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

//update

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }
        const ucourse = await Course.findById(id)
        const {code,name,credits,description} = req.body
        if(!code || !name || !credits) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await ucourse.updateOne({code,name,credits,description})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

//delete

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }
        const dcourse = await Course.findById(id)
        const results = await dcourse.deleteOne(dcourse).catch((error)=>{
            return res.status(500).json(error)}
        )
        res.status(200).json(results)
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

module.exports=router
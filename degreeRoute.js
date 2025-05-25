const express = require('express')
const router = express.Router()
const Degree = require('../models/degree')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Degree.find()
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
        const results = await Degree.findById(id)
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
        const results = await Degree.find({code:cid})
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
        const {_id,name,department,numberofyears} = req.body
        if(!_id || !name || !department || !numberofyears) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Degree.create({_id,name,department,numberofyears})
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
        const udegree = await Degree.findById(id)
        const {_id,name,department,numberofyears} = req.body
        if(!_id || !name || !department || !numberofyears) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await udegree.updateOne({_id,name,department,numberofyears})
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
        const ddegree = await Degree.findById(id)
        const results = await ddegree.deleteOne(ddegree).catch((error)=>{
            return res.status(500).json(error)}
        )
        res.status(200).json(results)
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

module.exports=router
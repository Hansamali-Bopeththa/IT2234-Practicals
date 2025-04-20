const express=require('express')
const router=express.Router()
const studentService=require('./studentService')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry,No data found !")
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getstudent(id)
    if(results)
    {
        res.status(200).json(results)
    }
    else
    {
        res.status(404).send("Sorry, no data found !")
    }
})

//gender
router.get('/gender/:gen',(req,res)=>{
    const gender = req.params.gen=='m'?'male':'female'
    const results = studentService.getByGender(gender)
    if(results)
    {
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry, No data found !")
    }
})

//course
router.get('/Course/:crs',(req,res)=>{
    const Course = req.params.crs
    const results = studentService.getBycourse(Course)
    if(results)
    {
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry, No data found !")
    }
})


module.exports=router
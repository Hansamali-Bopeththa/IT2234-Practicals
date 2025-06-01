const express=require('express')
const router=express.Router()
const Employee=require('../models/Employee')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Employee.find() 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/Employee', async (req, res) => {
  try {
    const result = await Employee.insertMany(req.body);
    res.status(201).json({ message: 'Employee inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/procount/',async(req,res)=>{
  try{
      const results=await Employee.find() 
      const newResults = results.map(emp=>({
        id:emp._id,
        name:emp.name,
        number_of_projects:emp._id.length
      }))
      if(results){
          res.status(200).json(newResults)
      }else{
          res.status(404).send("Sorry no data found")
      }
  }
  catch(error){
      console.error(error)
      res.status(500).send("Server error")
  }
})


//get project name along with employee details

router.get('/employeeProjects', async (req, res) => {
    try {
        const employees = await Employee.find().populate('projects'); // Assuming projects is referenced in Employee schema
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//get the distinct positions of employees

router.get('/positionsCount', async (req, res) => {
    try {
        const positions = await Employee.aggregate([
            {
                $group: {
                    _id: "$position",
                    count: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(positions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//along with distinct positions, show how many employees hold that position
//like engineers: 2
// HR: 1

module.exports=router
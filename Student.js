const mongoose=require('mongoose')
const studentSchema= new mongoose.Schema({
    //one to one relation
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String,require:true},
    degreeID:{
        type:String,
        require:true,
        ref:'degrees' //not a model name collection name 
    },
    //many to many relation
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})
    

const Student=mongoose.model('students',studentSchema)
/*const studentDetails= new Student({
    _id:'2021ICT03',
    name:'Hansamali',
    date_of_birth:'30-12-2002',
    gender:'Female',
    degreeID:'FAS2000ICT',
    enroled_courses:['68283186c471f4d19941a49f','682834f67b10bf4f01ee4ee5']
       
})
studentDetails.save()*/

module.exports=Student
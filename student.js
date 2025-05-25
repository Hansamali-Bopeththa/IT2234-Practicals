const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    age:{type:Number,require:true},
    degreeId:{
        type:String,
        require:true,
        ref:'degrees' //collection name
    }
})

const Student = mongoose.model('students',studentSchema)
const kevin = new Student({
    _id:'2021ict01',
    name:'Kevin',
    age:24,
    degreeId:'FAS2021IT'
})
//kevin.save()
module.exports = Student
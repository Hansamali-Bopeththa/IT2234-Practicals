const mongoose = require('mongoose')
const degreeSchema = new mongoose.Schema({
    _id:{type:String,require:true}, //define id by ourselves
    name:{type:String,require:true},
    department:{type:String,require:true},
    numberofyears:{type:Number,require:true}
})

const Degree = mongoose.model('degrees',degreeSchema)
const ICT = new Degree({
    _id:'FAS2021IT',
    name:'B Sc in Information Technology',
    department:'FAS',
    numberofyears:3
})
//ICT.save()
module.exports = Degree
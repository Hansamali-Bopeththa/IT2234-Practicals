const mongoose=require('mongoose')
const degreeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    duration:{type:Number,require:true},
    faculty:{type:String}

})

const Degree=mongoose.model('degrees',degreeSchema)
/*const BICT= new Degree({
    _id:'FAS2000ICT',
    name:'Bacholar of Information Tecnology',
    credits:3,
    duration:200,
    faculty:'Applied Science'
})
BICT.save()*/

module.exports=Degree
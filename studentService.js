const students = require('./studentdb');

function getstudents(){
    return students;
}

function getstudent(id)
{
    return students.find((student)=>student.Reg_No==id)
}

function getBygender(gender)
{
    return students.filter((student)=>student.gender==gender)
}

function getBycourse(id)
{
    return students.filter((student)=>student.Course==Course)
}

module.exports={getstudent,getstudents,getBygender,getBycourse}
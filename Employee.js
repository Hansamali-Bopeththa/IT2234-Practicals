const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salary: { type: Number, required: true, min: 0 },
    departmentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, 
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    etfID: { type: mongoose.Schema.Types.ObjectId, ref: 'Etf' }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

/*
const employees = [
    { _id: 1, name: "Ram", email: "Ram123@gmail.com", salary: 50000, departmentID: "D1", projects: ["P1", "P4"], etf: "E1"},
    { _id: 2, name: "Sita", email: "Sita456@gmail.com", salary: 60000, departmentID: "D2", projects: ["P2", "P4"], etf: "E2" },
    { _id: 3, name: "Krishna", email: "Krishna789@gmail.com", salary: 55000, departmentID: "D1", projects: ["P1", "P5"], etf: "E3" },
    { _id: 4, name: "Radha", email: "Radha321@gmail.com", salary: 62000, departmentID: "D3", projects: ["P3", "P5"], etf:"E4" },
    { _id: 5, name: "Lakshman", email: "Lakshman654@gmail.com", salary: 58000, departmentID: "D2", projects: ["P3", "P4"], etf: "E5"}
];

Employee.insertMany(employees);

*/

module.exports=Employee
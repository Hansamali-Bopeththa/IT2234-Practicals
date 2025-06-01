const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

/*
const departments = [
    { _id: "D1", name: "HR", employeeID: [1, 3] },
    { _id: "D2", name: "Finance", employeeID: [2, 5] },
    { _id: "D3", name: "IT", employeeID: [4] }
    
]
Department.insertMany(departments);

*/

module.exports=Department
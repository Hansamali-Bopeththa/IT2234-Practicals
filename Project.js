const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

/*
const projects = [
    { _id: "P1", name: "Alpha", employeeID: [1, 3] },
    { _id: "P2", name: "Beta", employeeID: [2] },
    { _id: "P3", name: "Gamma", employeeID: [4, 5] },
    { _id: "P4", name: "Delta", employeeID: [1, 2, 5] },
    { _id: "P5", name: "Epsilon", employeeID: [3, 4] }
];

Project.insertMany(projects);

*/
module.exports=Project
const mongoose = require('mongoose');

const etfSchema = new mongoose.Schema({
    employeeID: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', unique: true },
    contribution: { type: Number, required: true }
});

const Etf = mongoose.model('Etf', etfSchema);

module.exports = Etf;

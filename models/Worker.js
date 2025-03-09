const mongoose = require('mongoose');

// Define the Worker schema
const WorkerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    secondaryMobile: { type: String },
    jobTitle: { type: String, required: true },
    jobRole: { type: String, required: true },
    experience: { type: String },
    workAvailability: { type: String },
    skills: { type: String },
    expectedSalary: { type: String },
});

// Create the Worker model
const Worker = mongoose.model('Worker', WorkerSchema);

module.exports = Worker;

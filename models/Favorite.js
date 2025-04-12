const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User', required: true },
  workers: [{
    _id: { type: String, required: true },
    name: { type: String, required: true },
    jobTitle: { type: String },
    jobRole: { type: String },
    profileImage: { type: String },
    email: { type: String },
    mobile: { type: String },
    secondaryMobile: { type: String },
    experience: { type: String },
    skills: { type: String },
    expectedSalary: { type: Number },
    workAvailability: { type: String },
    district: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
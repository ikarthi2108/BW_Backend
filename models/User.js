const mongoose = require("mongoose");
const generateUserId = require("../utils/generateUserId");

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, default: generateUserId }, 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  acceptNotifications: { type: Boolean, default: false },
  registeredDateTime: { type: Date, default: Date.now },
  isRememberMe: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
  lastLoggedIn: { type: Date },
  otp: { type: String },
  otpExpiry: { type: Date },
  isOtpVerified: { type: Boolean, default: false },
  failedOtpAttempts: { type: Number, default: 0 },
  accountLocked: { type: Boolean, default: false },
  refreshToken: { type: String },
});

module.exports = mongoose.model("User", userSchema);



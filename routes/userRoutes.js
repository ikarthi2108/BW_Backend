const express = require("express");
const router = express.Router();
const {
  registerUser,
  verifyOtp,
  loginUser,
  logoutUser,
  refreshTokenHandler,
  getUserData,
  updateUserData,
} = require("../controllers/userController");
const {
  validateUser,
  handleValidationErrors,
} = require("../middlewares/validateUser");
const {
  validateOtp,
  handleValidationErrors: handleOtpValidationErrors,
} = require("../middlewares/validateOtp");

router.post("/register", validateUser, handleValidationErrors, registerUser);
router.post("/verify-otp", validateOtp, handleOtpValidationErrors, verifyOtp);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh-token", refreshTokenHandler);
router.get("/user/:userId", getUserData); // Route to fetch user data
router.put("/user/:userId", updateUserData); // Route to update user data

module.exports = router;

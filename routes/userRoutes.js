const express = require('express');
const router = express.Router();
const { registerUser, verifyOtp, loginUser, logoutUser, refreshTokenHandler } = require('../controllers/userController');
const { validateUser, handleValidationErrors } = require('../middlewares/validateUser');
const { validateOtp, handleValidationErrors: handleOtpValidationErrors } = require('../middlewares/validateOtp');

router.post('/register', validateUser, handleValidationErrors, registerUser);
router.post('/verify-otp', validateOtp, handleOtpValidationErrors, verifyOtp);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/refresh-token', refreshTokenHandler);




module.exports = router;
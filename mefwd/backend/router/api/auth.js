const express = require("express");
const loginController = require("../../controllers/LoginController");
const { verificationMiddleware } = require("../../middleware/verificationMid");
const registrationController = require("../../controllers/registrationController");
const {
  otpverifyController,
  resetotpController,
} = require("../../controllers/otpController");

const router = express.Router();

//localhost:4000/api/v1/auth/registration
router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/otpverify", otpverifyController);
router.post("/reset-otp", resetotpController);
router.get("/user", verificationMiddleware, (req, res) => {
  res.send("all users");
});

module.exports = router;

const userModel = require("../model/userModel");

async function otpverifyController(req, res) {
  const { email, otp } = req.body;
  const existinguser = await userModel.findOne({ email });
  if (existinguser) {
    if (existinguser.otp == otp) {
      existinguser.verify = true;
      await existinguser.save();
      return res.status(200).send({ success: true, msg: "otp Verified" });
    } else {
      return res.status(404).send({ msg: "Invalid otp " });
    }
  } else {
    return res.status(404).send({ success: true, msg: "User not found " });
  }
}
async function resetotpController(req, res) {
  console.log("hi");
}

module.exports = { otpverifyController, resetotpController };

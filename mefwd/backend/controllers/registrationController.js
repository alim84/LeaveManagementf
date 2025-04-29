const userModel = require("../model/userModel");
const EmailValidation = require("../helpers/EmailValidation");
const bcrypt = require("bcrypt");
const sendEmail = require("../helpers/sendEmail");

async function registrationController(req, res) {
  let { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(404).send({ error: "All field is required" });
  }
  if (!EmailValidation(email)) {
    return res.send({ error: "Invalid Email" });
  }
  let existinguser = await userModel.findOne({ email });
  if (existinguser) {
    return res.status(404).send({ error: " Email already used" });
  }
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new userModel({
        name,
        email,
        password: hash,
        role,
      });
      await user.save();
      let verifyotpSend = await userModel.findOneAndUpdate(
        { email },
        { $set: { otp: 123 } },
        { new: true }
      );
      setTimeout(async () => {
        await user.save();
        let verifyotpSend = await userModel.findOneAndUpdate(
          { email },
          { $set: { otp: null } },
          { new: true }
        );
      }, 50000);
      sendEmail(email);
      res.status(201).send(user);
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

module.exports = registrationController;

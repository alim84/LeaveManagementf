const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function loginController(req, res) {
  let { email, password } = req.body;

  let existinguser = await userModel.findOne({ email });
  if (existinguser) {
    bcrypt.compare(
      password,
      existinguser.password,
      async function (error, result) {
        if (result) {
          if (existinguser.role == "user") {
            let userInfo = {
              id: existinguser._id,
              name: existinguser.name,
              email: existinguser.email,
              role: existinguser.role,
            };
            const token = jwt.sign({ userInfo }, process.env.SECRET, {
              expiresIn: "1d",
            });
            res.cookie("ticket", token, {
              httpOnly: true,
              secure: false,
              maxAge: 3600000,
            });
            return res
              .status(200)
              .send({ success: "User Login", userdata: userInfo, token });
          } else if (existinguser.role == "admin") {
            let userInfo = {
              id: existinguser._id,
              name: existinguser.name,
              email: existinguser.email,
              role: existinguser.role,
            };
            const token = jwt.sign({ userInfo }, process.env.SECRET, {
              expiresIn: "2h",
            });
            res.cookie("ticket", token, {
              httpOnly: true,
              secure: false,
              maxAge: 3600000,
            });
            return res
              .status(200)
              .send({ success: "Admin Login", userdata: userInfo, token });
          }
        } else {
          return res.status(404).send({ error: "Wrong Password" });
        }
      }
    );
  } else {
    return res.send({ error: "Invalid Credential" });
  }
}

module.exports = loginController;

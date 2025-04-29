const jwt = require("jsonwebtoken");

function verificationMiddleware(req, res, next) {
  let { ticket } = req.cookies;

  if (ticket) {
    jwt.verify(ticket, process.env.SECRET, function (err, decoded) {
      if (err) {
        console.log(err);
        return res.status(400).send({ success: false, msg: err.message });
      } else {
        let { role } = decoded.userInfo;
        if (role == "admin") {
          next();
        } else {
          return res
            .status(401)
            .send({ success: false, msg: "Your r not Admin" });
        }
      }
    });
  } else {
    return res.status(404).send({ success: false, msg: "Token Not Found" });
  }
}

module.exports = { verificationMiddleware };

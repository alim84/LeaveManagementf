const mongoose = require("mongoose");

async function DbConnect() {
  await mongoose
    .connect(process.env.DATA_URL)
    .then(() => {
      console.log("database is Connected");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = DbConnect;

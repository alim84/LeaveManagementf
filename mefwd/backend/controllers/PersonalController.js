const fs = require("fs");
const path = require("path");
const disciplineModel = require("../model/personalInfoModel");

async function PersonalController(req, res) {
  try {
    let {
      name,
      designation,
      code,
      casedescription,
      institute,
      casetype,
      year,
      punismenttype,
    } = req.body;

    let disciplinemanagement = new disciplineModel({
      name,
      designation,
      code,
      casedescription,
      institute,
      casetype,
      year,
      punismenttype,
      image: process.env.SERVER_URL + req.file.filename,
    });

    await disciplinemanagement.save();

    return res
      .status(201)
      .send({ success: true, msg: "Discipline Data Entry Successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, msg: "Server error occurred." });
  }
}

module.exports = {
    PersonalController,
};

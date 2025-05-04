const disciplineModel = require("../model/disciplineModel");

async function AddDisciplineController(req, res) {
  let {
    name,
    designation,
    code,
    csedescription,
    institute,
    casetype,
    year,
    punismnettype,
  } = req.body;

  let disciplinemanagement = new disciplineModel({
    name,
    designation,
    code,
    csedescription,
    institute,
    casetype,
    year,
    punismnettype,
    image: process.env.SERVER_URL + req.file.filename,
  });
  await disciplinemanagement.save();
  return res
    .status(201)
    .send({ success: true, msg: "Leave Data Entry Sucessfully" });
}

module.exports = {
  AddDisciplineController,
};

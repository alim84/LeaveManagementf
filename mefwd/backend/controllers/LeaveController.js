
const leaveManModel = require("../model/leaveManModel");
const fs = require("fs");
const path = require("path");

async function LeaveController(req, res) {
  let {
    name,
    code,
    designation,
    institute,
    from,
    to,
    country,
    category,
    finance,
    description,
  } = req.body;

  let leavemanagement = new leaveManModel({
    name,
    code,
    designation,
    institute,
    from,
    to,
    country,
    category,
    finance,
    description,
    image: process.env.SERVER_URL + req.file.filename,
  });
  await leavemanagement.save();
  return res
    .status(201)
    .send({ success: true, msg: "Leave Data Entry Sucessfully" });
}

async function ShowLeaveController(req, res) {
  try {
    let showallLeave = await leaveManModel.find({});
    res
      .status(200)
      .send({ success: true, msg: "show all Leave", data: showallLeave });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Internal Server error"}`,
      error,
    });
  }
  res.send("Show All Leave");
}

module.exports = { LeaveController, ShowLeaveController };

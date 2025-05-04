const fs = require("fs");
const path = require("path");
const leaveManModel = require("../model/leaveManModel");

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
    return res
      .status(200)
      .send({ success: true, msg: "show all Leave", data: showallLeave });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Internal Server error"}`,
      error,
    });
  }
}

async function deleteLeave(req, res) {
  let { id } = req.params;
  try {
    let leavedelete = await leaveManModel.findOneAndDelete({ _id: id });
    let imagepath = leavedelete.image.split("/");
    let oldimagepath = imagepath[imagepath.length - 1];
    fs.unlink(
      `${path.join(__dirname, "../uploads")}/${oldimagepath}`,
      (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            msg: `${err.message ? err.message : "Internal Server error"}`,
            err,
          });
        } else {
          res
            .status(200)
            .send({ success: true, msg: "image Deleted", data: leavedelete });
        }
      }
    );
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: `${error.message ? error.message : "Internal Server error"}`,
      error,
    });
  }
}

async function updateLeaveController(req, res) {
  let { id } = req.params;
  let { name, code, designation, institute, from, to, country, category, finance, description } = req.body;
  const image = req.file;

  try {
    // First, find the existing leave record
    let existingLeave = await leaveManModel.findById(id);
    if (!existingLeave) {
      return res.status(404).send({ success: false, msg: "Leave not found" });
    }

    // Update data
    let updatedData = { name, code, designation, institute, from, to, country, category, finance, description };
    if (image) {
      updatedData.image = process.env.HOST_URL + image.filename;
    }

    let leaveupdate = await leaveManModel.findOneAndUpdate(
      { _id: id },
      updatedData,
      { new: true } // returns the updated document
    );

    // If there is a new image, delete the old image
    if (image && existingLeave.image) {
      let imagepath = existingLeave.image.split("/");
      let oldimagepath = imagepath[imagepath.length - 1];
      const fullOldImagePath = path.join(__dirname, "../uploads", oldimagepath);

      fs.unlink(fullOldImagePath, (err) => {
        if (err) {
          console.error("Error deleting old image:", err.message);
          // Don't return error to client here, just log it
        }
      });
    }

    res
      .status(200)
      .send({
        success: true,
        msg: "Leave updated successfully",
        data: leaveupdate,
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: error.message || "Internal Server Error",
      error,
    });
  }
}

module.exports = {
  LeaveController,
  ShowLeaveController,
  deleteLeave,
  updateLeaveController,
};

const express = require("express");

const multer = require("multer");
const { PersonalController } = require("../../controllers/PersonalController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extensionname = file.originalname.split(".");
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        `.${extensionname[extensionname.length - 1]}`
    );
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

function errorhandle(err, req, res, next) {
  if (err) {
    return res.status(500).send({ seccess: false, msg: err.message });
  }
  next();
}

router.post(
  "/leavemanagement",
  upload.single("image"),
  errorhandle,
  PersonalController
);
// router.get("/showleave", ShowLeaveController);
// router.delete("/deleteleave/:id", deleteLeave);
// router.patch("/updateleave/:id", upload.single("image"), updateLeaveController);

module.exports = router;

const { default: mongoose, Schema } = require("mongoose");

let personalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    maritalstatus: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    hdristric: {
      type: String,
      required: true,
    },
    perdivision: {
      type: String,
      required: true,
    },
    perdristric: {
      type: String,
      required: true,
    },
    perupazila: {
      type: String,
      required: true,
    },
    perpostoffice: {
      type: String,
      required: true,
    },
    perword: {
      type: String,
      required: true,
    },
    perroad: {
      type: String,
      required: true,
    },
    perhouse: {
      type: String,
      required: true,
    },
    predivision: {
      type: String,
      required: true,
    },
    predristric: {
      type: String,
      required: true,
    },
    preupazila: {
      type: String,
      required: true,
    },
    prepostoffice: {
      type: String,
      required: true,
    },
    preword: {
      type: String,
      required: true,
    },
    preroad: {
      type: String,
      required: true,
    },
    prehouse: {
      type: String,
      required: true,
    },
    apointmenttype: {
      type: String,
      required: true,
    },
    firstjoint: {
      type: String,
      required: true,
    },
    firstdesignation: {
      type: String,
      required: true,
    },
    salaryscale: {
      type: String,
      required: true,
    },
    promotiondesignation: {
      type: String,
      required: true,
    },
    promotiondate: {
      type: String,
      required: true,
    }
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("personalInformation", personalSchema);

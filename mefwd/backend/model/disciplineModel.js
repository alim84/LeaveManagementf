const { default: mongoose, Schema } = require("mongoose");

let disciplineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    casedescription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    casetype: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    punismenttype: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DisciplineManagement", disciplineSchema);

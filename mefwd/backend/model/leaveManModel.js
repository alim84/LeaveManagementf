const { default: mongoose, Schema } = require("mongoose");

let leaveSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    finance: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LeaveManagement", leaveSchema);

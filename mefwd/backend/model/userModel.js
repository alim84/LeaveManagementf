const { default: mongoose, Schema } = require("mongoose");

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Your email already used"],
      trim: true,
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    otp: {
      type: Number,
      default: false,
    },
    verify: {
      type: Boolean,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

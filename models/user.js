const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    ip_address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//making model
const User = mongoose.model("users", userSchema);

module.exports = User;

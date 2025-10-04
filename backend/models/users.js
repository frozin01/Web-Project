const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Users", users);
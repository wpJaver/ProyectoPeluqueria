const mongoose = require("mongoose");
const { Schema } = mongoose;

let UserScheme = new Schema({
  nameUser: String,
  email: String,
  password: String,
  rol: { type: Number, default: 1 },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserScheme, "Users");

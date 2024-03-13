const { Schema, model } = require("mongoose");

const schema = new Schema({
  username: { type: String },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("users-tarea-4", schema);

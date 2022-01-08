const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    todo: [
      {
        title: {
          type: String,
        },
        date: {
          type: String,
        },
        isCompleted: { type: Boolean, default: false },
      },
    ],
  },

  { collection: "user-todo" }
);

const model = mongoose.model("UserData", User);

module.exports = model;

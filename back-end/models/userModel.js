const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    sex: {
      type: String, possibleValues: ['Homme','Femme'],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    tel: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "coach","admin"]
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports =  user = model("user", UserSchema);

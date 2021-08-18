const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    sex: {
      type: String, possibleValues: ['Homme','Femme'],
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    tel: {
      type: Number,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    role: {
      type: String,
      enum: ["user", "coach","admin"],
      default: "user"
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    hash_password: {
      type: String,
      required: true
    },
    cv : {
      type: String
    }
  },
  { timestamps: true }
);

UserSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

UserSchema.virtual("fullName").get(function () {
  return `${this.name} ${this.lastname}`;
});

UserSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};



module.exports =  user = model("user", UserSchema);

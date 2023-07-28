const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    phone: String,
    address: String,
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      require: true,
      minLength: 6
    },
    isRemoved:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;

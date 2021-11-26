import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "An email is required for registration"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        return validator.isEmail(email);
      },
      message: (props) => `${props.value} is not a real email`,
    },
  },
  photo: {
    type: String,
    default: anonymous.jpg,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true.valueOf, "Please provide a password"],
    validate: {
      validator: function (passwordConfirm) {
        return passwordConfirm === this.password;
      },
      message: "The passwords does not match",
    },
  },
});

const User = mongoose.model("User", userSchema);

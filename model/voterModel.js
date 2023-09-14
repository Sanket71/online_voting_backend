const mongoose = require('mongoose');
const validator = require('validator');

const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Student must have a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  photo: String,
  year: {
    type: Number,
  },
  Department: {
    type: String,
  },
});

const Voter = mongoose.model('Voter', voterSchema);

module.exports = Voter;

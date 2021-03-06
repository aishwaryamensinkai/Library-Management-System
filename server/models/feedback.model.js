const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var feedbackSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "Full name can't be empty",
  },
  email: {
    type: String,
    required: "Email can't be empty",
    unique: true,
  },
  branch: {
    type: String,
    required: "Branch can't be empty",
  },
  usn: {
    type: String,
    required: "USN can't be empty",
    unique: true,
  },
  fb: {
    type: String,
    required: "Feed back can't be empty",
  },
  saltSecret: String,
});

// Custom validation for email
feedbackSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail.");

feedbackSchema.path("usn").validate((val) => {
  usnRegex = /^01fe[0-9]{2}b[a-zA-Z]{2}[0-9]{3}$/;
  return usnRegex.test(val);
}, "Invalid e-mail.");

// Events
feedbackSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

// Methods
feedbackSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

feedbackSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};

mongoose.model("Feedback", feedbackSchema);

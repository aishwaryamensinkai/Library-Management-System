const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var booksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Book name can't be empty",
    unique: true,
  },
  author: {
    type: String,
    required: "Author name can't be empty",
  },
  bookno: {
    type: Number,
    required: "Book Number can't be empty",
    unique: true,
  },
  noofpages: {
    type: Number,
    required: "Number of pages can't be empty",
  },
  edition: {
    type: Number,
    required: "Edition can't be empty",
    unique: true,
  },
  publishedby: {
    type: String,
    required: "Published by can't be empty",
  },
  quantity: {
    type: Number,
    required: "USN can't be empty",
  },
  saltSecret: String,
});

// Events
booksSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

// Methods
booksSchema.methods.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

booksSchema.methods.generateJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};

mongoose.model("Books", booksSchema);

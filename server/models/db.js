const mongoose = require("mongoose");
mongoose.set("useCreateIndex", { sparse: true }, { unique: true });
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

module.exports = mongoose;
require("./user.model");
require("./student.model");
require("./books.model");
require("./feedback.model");

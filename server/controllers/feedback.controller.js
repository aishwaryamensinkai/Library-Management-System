const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const Feedback = mongoose.model("Feedback");

module.exports.fregister = (req, res, next) => {
  var feedback = new Feedback({
    fullName: req.body.fullName,
    usn: req.body.usn,
    branch: req.body.branch,
    email: req.body.email,
    fb:req.body.fb,
  });
  feedback.save((err, doc) => {
    if (!err) res.send(doc);
    //else {
    //   console.log(
    //     "Error in Employee Save :" + JSON.stringify(err, undefined, 2)
    //   );
    // }
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate Email or USN found."]);
      else return next(err);
    }
  });
};

module.exports.feedbackProfile = (req, res, next) => {
  Feedback.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving feedback :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};

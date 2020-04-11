const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const Student = mongoose.model("Student");

module.exports.sregister = (req, res, next) => {
  var student = new Student({
    fullName: req.body.fullName,
    usn: req.body.usn,
    branch: req.body.branch,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
  });
  student.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate Email or USN found."]);
      else return next(err);
    }
  });
};

module.exports.studentProfile = (req, res, next) => {
  Student.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Students :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};

// module.exports.deleteStudent = (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record with given id : ${req.params.id}`);

//   Student.findByIdAndRemove(req.params.id, (err, doc) => {
//     if (!err) {
//       res.send(doc);
//     } else {
//       console.log(
//         "Error in Student Delete :" + JSON.stringify(err, undefined, 2)
//       );
//     }
//   });
// };

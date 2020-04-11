const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

var ObjectId = require("mongoose").Types.ObjectId;
const Books = mongoose.model("Books");

module.exports.bregister = (req, res) => {
  var books = new Books({
    name: req.body.name,
    author: req.body.author,
    bookno: req.body.bookno,
    noofpages: req.body.noofpages,
    edition: req.body.edition,
    publishedby: req.body.publishedby,
    quantity: req.body.quantity,
  });
  books.save((err, doc) => {
    if (!err) {
    res.send(doc);
    }
    // else {
    //   console.log(
    //     "Error in Employee Save :" + JSON.stringify(err, undefined, 2)
    //   );
    // }
    else {
      if (err.code == 11000)
        res
          .status(422)
          .send(["Duplicate Name or Edition or Book Number found."]);
          else return next(err);
    }
  });
};

module.exports.booksProfile = (req, res, next) => {
  Books.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Books :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};

module.exports.deleteBook = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Books.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Book Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
};

// module.exports.booksProfile = ('/_id', (req, res, next) => {
//   if (!ObjectId.isValid(req.params._id))
//     return res.status(400).send(`No record with given id : ${req.params._id}`);

//   Books.findById(req.params._id, (err, doc) => {
//     if (!err) {
//       res.send(doc);
//     } else {
//       console.log(
//         "Error in Retriving Books :" + JSON.stringify(err, undefined, 2)
//       );
//     }
//   });
// });

// module.exports.updateBooks =("/_id",(req, res, next) => {
//     if (!ObjectId.isValid(req.params._id))
//       return res.status(400).send(`No record with given id : ${req.params._id}`);

//     var books = {
//       name: req.body.name,
//       author: req.body.author,
//       bookno: req.body.bookno,
//       noofpages: req.body.noofpages,
//       edition: req.body.edition,
//       publishedby: req.body.publishedby,
//       quantity: req.body.quantity,
//     };
//     Books.findByIdAndUpdate(
//       req.params._id,
//       { $set: books },
//       { new: true },
//       (err, doc) => {
//         if (!err) {
//           res.send(doc);
//         } else {
//           console.log(
//             "Error in Books Update :" + JSON.stringify(err, undefined, 2)
//           );
//         }
//       }
//     );
//   });

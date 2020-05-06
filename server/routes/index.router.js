const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");
const ctrlStudent = require("../controllers/student.controller");
const ctrlBooks = require("../controllers/books.controller");
const ctrlFeedback = require("../controllers/feedback.controller");

const jwtHelper = require("../config/jwtHelper");

router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post("/sregister", ctrlStudent.sregister);
router.get("/studentProfile", ctrlStudent.studentProfile);

router.post("/bregister", ctrlBooks.bregister);
router.get("/booksProfile", ctrlBooks.booksProfile);
router.put("/update/:id", ctrlBooks.update);
router.delete("/deleteBook/:id", ctrlBooks.deleteBook);

router.post("/fregister", ctrlFeedback.fregister);
router.get("/feedbackProfile", ctrlFeedback.feedbackProfile);
module.exports = router;

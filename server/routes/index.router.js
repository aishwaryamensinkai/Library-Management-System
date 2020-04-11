const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");
const ctrlStudent = require("../controllers/student.controller");
const ctrlBooks = require("../controllers/books.controller");

const jwtHelper = require("../config/jwtHelper");

router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post("/sregister", ctrlStudent.sregister);
router.get("/studentProfile", ctrlStudent.studentProfile);
// router.delete("/deleteStudent/:id", ctrlStudent.deleteStudent);

router.post("/bregister", ctrlBooks.bregister);
router.get("/booksProfile", ctrlBooks.booksProfile);
router.delete("/deleteBook/:id", ctrlBooks.deleteBook);

module.exports = router;

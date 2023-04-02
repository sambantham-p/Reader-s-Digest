const express = require('express');
const router = express.Router();
const bookApp = require('../model/MainModel');
const bookController = require('../controllers/controller');

router.get("/books/",bookController.getAllBooks)
router.post("/books/",bookController.addBook)
router.get("/books/:id",bookController.getById)
router.put("/books/:id",bookController.updateBook)
router.delete("/books/:id",bookController.deleteBook)
router.get("/books/:name",bookController.getByName)
router.get("/user/",bookController.getAllUsers)
router.post("/user/",bookController.addUser)
router.delete("/user/:id",bookController.deleteUser)
router.get("/search/",bookController.searchByName)
router.get("/auth/google/callback",bookController.login)
router.get("/auth/login/failed",bookController.loginFailed)
router.get("/auth/login/success",bookController.loginSuccess)
router.get("/auth/google",bookController.google);
router.get("/auth/logout",bookController.logout);
module.exports = router;
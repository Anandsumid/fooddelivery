const Food = require("../models/Food_info");
const Category = require("../models/Order");
const express = require("express");
const router = express.Router();
const FoodController = require("../controller/FoodController");
const UserController = require("../controller/UserController")
const OrderController = require("../controller/OrderController")
const CategoryController = require("../controller/OrderController");
const create_update = require("../middleware/create_update");
const validator = require("../middleware/validator")
const AuthController = require('../controller/AuthController')


// ADMIN 
router.post("/register", AuthController.register)
router.post("/login", AuthController.login)
module.exports = router;
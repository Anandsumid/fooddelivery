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

// Foods ENDPOINT
router.get("/foods", FoodController.get_foods);
router.get("/food/name/:name", FoodController.findOne);
router.post("/foodCreate",validator.createfood(), FoodController.create
);
router.post("/foodUpdate/id/:id", FoodController.update);
router.post("/foodDelete/id/:id", FoodController.delete_food);

//Category ENDPOINT
router.get("/category");
router.post("/categoryCreate");
router.post("/categoryUpdate/catId/:id");
router.post("/categoryDelete/catId/:id");

//User ENDPOINT
router.get("/users",UserController.get_users);
router.post("/userCreate",UserController.create);
router.post("/userUpdate/userId/:id",UserController.update);
router.post("/userDelete/userId/:id",UserController.delete_users);


//Order ENDPOINT
router.get("/orders", OrderController.get_orders);
router.post("/orderCreate",OrderController.create);
router.post("/orderUpdate/userId/:id",OrderController.update);
router.post("/orderDelete/userId/:id",OrderController.delete_orders);

module.exports = router;

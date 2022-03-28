const { body, validationResult } = require("express-validator");

const createfood = () => {
  return [
    body("name").not().isEmpty(),
    body("price").not().isEmpty().withMessage("Price empty!"),
    body("discount")
      .isNumeric()
      .isFloat({ min: 0, max: 100 })
      .withMessage("0-100% sale possible"),
    body("stock")
      .isNumeric()
      .isLength({ min: 0 })
      .withMessage("Can't be less than 0")
  ];
};
exports.createfood = createfood;
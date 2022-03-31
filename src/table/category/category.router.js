const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./validator");
const category = require("./category.controller");

router.get("/", category.findAll);
router.get("/:id", category.findOne);
router.post("/", category.create);
router.put("/:id", category.update);
router.delete("/:id", validate(Validator.deleteOne), category.delete);

module.exports = router;

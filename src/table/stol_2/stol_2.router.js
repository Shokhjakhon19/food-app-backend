const stol_2 = require("./stol_2.controller");
const router = require("express").Router();
const Validator = require("./stol_2.validator");
const validate = require("express-validation");

router.get("/", stol_2.findAll);
router.get("/:id", stol_2.findOne);
router.post("/", stol_2.create);
router.put("/:id", stol_2.update);
router.delete("/:id", validate(Validator.deleteOne), stol_2.delete);

module.exports = router;

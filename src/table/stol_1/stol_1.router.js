const stol_1 = require("./stol_1.controller");
const router = require("express").Router();
const Validator = require("./stol_1.validator");
const validate = require("express-validation");

router.get("/", stol_1.findAll);
router.get("/:id", stol_1.findOne);
router.post("/", stol_1.create);
router.put("/:id", stol_1.update);
router.delete("/:id", validate(Validator.deleteOne), stol_1.delete);

module.exports = router;

const stol_4 = require("./stol_4.controller");
const router = require("express").Router();
const Validator = require("./stol_4.validator");
const validate = require("express-validation");

router.get("/", stol_4.findAll);
router.get("/:id", stol_4.findOne);
router.post("/", stol_4.create);
router.put("/:id", stol_4.update);
router.delete("/:id", validate(Validator.deleteOne), stol_4.delete);

module.exports = router;

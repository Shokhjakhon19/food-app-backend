const stol_3 = require("./stol_3.controller");
const router = require("express").Router();
const Validator = require("./stol_3.validator");
const validate = require("express-validation");

router.get("/", stol_3.findAll);
router.get("/:id", stol_3.findOne);
router.post("/", stol_3.create);
router.put("/:id", stol_3.update);
router.delete("/:id", validate(Validator.deleteOne), stol_3.delete);

module.exports = router;
const stol_1 = require("./stol_1.controller");
const router = require("express").Router();
const Validator = require("./stol_2.validator");
const validate = require("express-validation");

//===== post router
router.post("/", stol_1.create);
// ==== get router
router.get("/", stol_1.findAll);
router.get("/:id", stol_1.findOne);
// ==== put router
router.put("/:id", stol_1.update);
// ===== delete router
router.delete("/", stol_1.deleteAll);
router.delete("/:id", validate(Validator.deleteOne), stol_1.deleteOne);

module.exports = router;

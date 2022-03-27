const stol_2 = require("./stol_2.controller");
const router = require("express").Router();
const Validator = require("./stol_2.validator");
const validate = require("express-validation");

//===== post router
router.post("/", stol_2.create);
// ==== get router
router.get("/", stol_2.findAll);
router.get("/:id", stol_2.findOne);
// ==== put router
router.put("/:id", stol_2.update);
// ===== delete router
router.delete("/", stol_2.deleteAll);
router.delete("/:id", validate(Validator.deleteOne), stol_2.deleteOne);

module.exports = router;

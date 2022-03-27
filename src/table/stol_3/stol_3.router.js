const stol_3 = require("./stol_3.controller");
const router = require("express").Router();
const Validator = require("./stol_3.validator");
const validate = require("express-validation");

//===== post router
router.post("/", stol_3.create);
// ==== get router
router.get("/", stol_3.findAll);
router.get("/:id", stol_3.findOne);
// ==== put router
router.put("/:id", stol_3.update);
// ===== delete router
router.delete("/", stol_3.deleteAll);
router.delete("/:id", validate(Validator.deleteOne), stol_3.deleteOne);

module.exports = router;

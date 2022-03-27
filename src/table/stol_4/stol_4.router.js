const stol_4 = require("./stol_4.controller");
const router = require("express").Router();
const Validator = require("./stol_4.validator");
const validate = require("express-validation");

//===== post router
router.post("/", stol_4.create);
// ==== get router
router.get("/", stol_4.findAll);
router.get("/:id", stol_4.findOne);
// ==== put router
router.put("/:id", stol_4.update);
// ===== delete router
router.delete("/", stol_4.deleteAll);
router.delete("/:id", validate(Validator.deleteOne), stol_4.deleteOne);

module.exports = router;

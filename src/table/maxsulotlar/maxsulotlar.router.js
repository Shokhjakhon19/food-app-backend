const maxsulotlar = require("./maxsulotlar.controller");
const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./maxsulotlar.validation");

router.get("/", maxsulotlar.findAll);
router.get("/filter", maxsulotlar.filter);
router.get("/:id", maxsulotlar.findOne);
router.post("/", maxsulotlar.create);
router.put("/:id", maxsulotlar.update);
router.delete("/:id", validate(Validator.deleteOne), maxsulotlar.delete);

module.exports = router;

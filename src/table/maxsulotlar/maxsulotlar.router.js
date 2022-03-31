const maxsulotlar = require("./maxsulotlar.controller");
const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./maxsulotlar.validation");
const upload = require("../../util/uploadImg");

router.get("/", maxsulotlar.findAll);
router.get("/filter", maxsulotlar.filter);
router.get("/:id", maxsulotlar.findOne);
router.post("/", upload.single("file"), maxsulotlar.create);
router.put("/:id", upload.single("file"), maxsulotlar.update);
router.delete("/:id", validate(Validator.deleteOne), maxsulotlar.delete);

module.exports = router;

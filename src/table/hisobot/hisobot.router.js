const hisobot = require("./hisobot.controller");
const router = require("express").Router();
const validate = require("express-validation");
const Validation = require("./hisobot.validation");

router.get("/", hisobot.findAll);
router.get("/:id", hisobot.findOne);
router.post("/", hisobot.create);
router.put("/:id", hisobot.update);
router.delete("/:id", validate(Validation.deleteOne), hisobot.delete);

module.exports = router;

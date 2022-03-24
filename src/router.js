const express = require("express");
const router = express.Router();
const adminRouter = require("./admin/router");
const hisobotRouter = require("./table/hisobot/hisobot.router");
const maxsulotRouter = require("./table/maxsulotlar/maxsulotlar.router");
const st1Router = require("./table/stol_1/stol_1.router");
const st2Router = require("./table/stol_2/stol_2.router");
const st3Router = require("./table/stol_3/stol_3.router");
const st4Router = require("./table/stol_4/stol_4.router");

router.use("/admin", adminRouter);
router.use("/hisobot", hisobotRouter);
router.use("/maxsulotlar", maxsulotRouter);
router.use("/stol_1", st1Router);
router.use("/stol_2", st2Router);
router.use("/stol_3", st3Router);
router.use("/stol_4", st4Router);

module.exports = router;

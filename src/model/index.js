const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hisobot = require("../table/hisobot/hisobot.model")(sequelize, Sequelize);
db.category = require("../table/category/category.model")(sequelize, Sequelize);
db.maxsulotlar = require("../table/maxsulotlar/maxsulotlar.model")(
  sequelize,
  Sequelize
);
db.stol_1 = require("../table/stol_1/stol_1.model")(sequelize, Sequelize);
db.stol_2 = require("../table/stol_2/stol_2.model")(sequelize, Sequelize);
db.stol_3 = require("../table/stol_3/stol_3.model")(sequelize, Sequelize);
db.stol_4 = require("../table/stol_4/stol_4.model")(sequelize, Sequelize);

module.exports = db;

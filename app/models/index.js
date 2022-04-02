
const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgresql://postgres:dima1288@localhost:5433/cube2");
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.form = require("./form.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
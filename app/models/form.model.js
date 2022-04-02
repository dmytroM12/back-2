
module.exports = (sequelize, Sequelize) => {
    const User = require("./user.model");
    const Form = sequelize.define("form", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rows: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      columns:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      uid:{
          type:Sequelize.INTEGER,
          allowNull:false
      }
    });
    Form.removeAttribute("id")
    return Form;
  };
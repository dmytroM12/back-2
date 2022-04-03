
module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("form", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
const db = require("../models");
const Form = db.form;
const Op = db.Sequelize.Op;
exports.addForm = (req, res) => {
    
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const form = {
      uid: req.body.uid,
      name: req.body.name,
      rows: req.body.rows,
      columns: req.body.columns
    };
    
    Form.create(form)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Form."
        });
      });
  };

  exports.getForms = (req, res) => {
    Form.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the forms."
        });
      });
  };
  exports.getUserForms = (req, res) => {
      const uid=req.params.uid;
    Form.findAll({where:{uid:uid}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving forms."
        });
      });
  };
  exports.updateForm = (req, res) => {
    const uid = req.body.uid;
    const name=req.body.name;
    Form.update(req.body, {
      where: { uid: uid,name:name }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Form was updated successfully."
          });
        } else {
          res.send({
            message: `Form not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Form."
        });
      });
    };
    exports.deleteForm = (req, res) => {
        const uid = req.body.uid;
        const name=req.body.name;
        Form.destroy({
          where: { uid: uid,name:name }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Form was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete the Form`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete the Form"
            });
          });
      };
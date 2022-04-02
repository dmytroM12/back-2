const User = require("../models/user.model")
exports.addUser = (req, res) => {
    
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const user = {
      email: req.body.email,
      description: req.body.password,
    };
    
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.getUsers = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
  };
  exports.updateUser = (req, res) => {
    const id = req.params.id;
    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Uer with id=" + id
        });
      });
    };
    exports.deleteUser = (req, res) => {
        const id = req.params.id;
        Tutorial.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "User was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete User with id=" + id
            });
          });
      };
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicate= (req, res, next) => {
 User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }
    console.log('VERIFIED!')
    next();
  });
};
const verifySignUp = {
  checkDuplicate: checkDuplicate
}
module.exports = verifySignUp;
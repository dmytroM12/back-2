const {Router} =require('express');
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router=Router();

  router.post(
    "/signup",
    [
      verifySignUp.checkDuplicate,
    ],
    controller.signup
  );
  router.post("/signin", controller.signin);
  module.exports=router;
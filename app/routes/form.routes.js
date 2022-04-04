const {Router} =require('express');
const controller = require('../controllers/form.controller')
const router=Router();
const { authJwt } = require("../middleware");
router.get('/',[authJwt.verifyToken],controller.getForms)
router.get('/:uid',[authJwt.verifyToken],controller.getUserForms)
router.post('/',[authJwt.verifyToken],controller.addForm)
router.put('/',[authJwt.verifyToken],controller.updateForm)
router.delete('/',[authJwt.verifyToken],controller.deleteForm)
module.exports=router
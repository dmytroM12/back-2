const {Router} =require('express');
const controller = require('../controllers/user.controller')
const { authJwt } = require("../middleware");
const router=Router();

router.get('/', controller.getUsers);
router.get('/:id',controller.getUserById)
router.post('/',controller.addUser)
router.put('/:id',controller.updateUser)
router.delete('/:id',controller.deleteUser)
module.exports=router;
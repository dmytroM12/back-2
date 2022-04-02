const {Router} =require('express');
const controller = require('../controllers/form.controller')
const router=Router();

router.get('/',controller.getForms)
router.get('/:uid',controller.getUserForms)
router.post('/',controller.addForm)
router.put('/',controller.updateForm)
router.delete('/',controller.deleteForm)
module.exports=router
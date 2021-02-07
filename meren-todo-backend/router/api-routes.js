const router = require('express').Router();
const todoController = require('../controller/todoController');
router.get('/',(req,res)=>{
    res.json({
        status: 'Api is woking',
        message : 'We implemented router'

    });
});
router.route('/todos').get(todoController.home)
                      .post(todoController.new);
router.route('/todos/_id').get(todoController.view)
                          .put(todoController.update);
module.exports=router;
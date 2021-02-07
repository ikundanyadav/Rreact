let Todo=require('../model/todo');


exports.home = (req,res)=>{
    Todo.get((err,todos)=>{
        if(err) {
            console.log('there is some error in fetching db!');
            res.json({
                status:'error',
                message:'some error in getting data',
            });
        }
            res.json({
                status:'ok',
                message:'data fetched',
                data:todos
            });
    });
}
exports.new=(req,res)=>{
    let todo = new Todo();
    todo.todo_description = req.body.todo_description? req.body.todo_description:todo.todo_description;
    todo.todo_responsible = req.body.todo_responsible?req.body.todo_responsible:todo.todo_responsible;
    todo.todo_priority = req.body.todo_priority?req.body.todo_priority:todo.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    todo.save((err,res)=>{
        if(err) {console.log(res)}
        res.json({
            message:'todo saved!',
            data:todo
        });
    });
}
exports.view=(req,res)=>{
    Todo.findById(req.params._id,(err,todo)=>{
        if(err) res.json(err);
        res.json({
            message:"todo found",
            data:todo
        });
    });
}
exports.update=(req,res)=>{
    Todo.findById(req.params._id,(err,todo)=>{
        if(err) res.json(err);
        todo.todo_description = req.body.todo_description?req.body.todo_description:todo.todo_description;
        todo.todo_responsible = req.body.todo_responsible?req.body.todo_responsible:todo.todo_responsible;
        todo.todo_priority = req.body.todo_priority?req.body.todo_priority:todo.todo_priority;
        todo.todo_completed = req.body.todo_completed?req.body.todo_completed:todo.todo_completed;
        todo.save(err=>{
            if(err) res.json(err);
            res.json({
                message:'contact updated succesfully',
                data : todo
            });
        });
    });
}

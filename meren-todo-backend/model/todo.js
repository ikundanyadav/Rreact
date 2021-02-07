const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todo_description :{
        type:String,
        required:true
    },
    todo_responsible:{
        type:String,
        required:true
    },
    todo_priority:{
        type:String,
        required:true
    },
    todo_completed:{
        type:Boolean,
        required:false,
        default:false
    }
})

const Todo = module.exports=mongoose.model('todo',todoSchema);

module.exports.get = (callback,limit)=>{
    Todo.find(callback).limit(limit);
}
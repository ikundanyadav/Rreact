import { Component } from "react";
import CreateTodo from './create-todo'
class TodosList extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            item:{
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: ''
            },
            isLoaded : false
        }
        this.state.items=this.state.items.concat(props.item)
        //this.addItem=this.addItem.bind(this);
        //if(this.props.item.todo_description!=='')
        //this.addItem(this.props.item);
    }

    /*addItem(e) {
        let newItem = {
            todo_description: e.todo_description,
            todo_responsible: e.todo_responsible,
            todo_priority: e.todo_priority,
            todo_completed: e.todo_completed
        };

        this.setState(prevState => {
            return { items: this.prevState.items.concat(newItem) }
        });
        console.log(this.state.items);

    }*/
    componentDidMount(){
        fetch('http://127.0.0.1:8080/todos')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                isLoaded:true,
                items:data.data
            })
        })       
    }
    render(){
        let {isLoaded,items} = this.state;
    
        if(!isLoaded) return <div>Data is not loaded</div>

        else {
            return(    
            <div className="container">
                <p>You are in List of todos.<br></br>
                <ul>
                    {items.map(item=>
                        <li key = {item._id}>
                            Description : {item.todo_description}
                        </li>
                        )}
                </ul>
                </p>
            </div>
            )   
        }
    }
}
export default TodosList;
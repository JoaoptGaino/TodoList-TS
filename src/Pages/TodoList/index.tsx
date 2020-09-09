import React, { useState } from 'react';
import { TodoListItem } from '../../Components/TodoItem';

const initialTodos:Todo[]=[
    {
        text:"Learn js",
        complete:true
    },
    {
        text:"Learn everything",
        complete:false
    }
]

function TodoList(){
    const[todos,setTodos] = useState(initialTodos);

    const handleTodo = (selectedTodo:Todo)=>{
        const newTodo = todos.map(todo=>{
            if(todo === selectedTodo){
                return{
                    ...todo,
                    complete:!todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodo);
    }
    return(
        <ul>
            <TodoListItem todo={todos[0]} handleTodo={handleTodo}/>
            <TodoListItem todo={todos[1]} handleTodo={handleTodo}/>
        </ul>
    )
}

export default TodoList;
import React from 'react';
import { TodoListItem } from '../../Components/TodoItem';

const todos:Todo[]=[
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
    return(
        <>
            <TodoListItem todo={todos[0]}/>
            <TodoListItem todo={todos[1]}/>
        </>
    )
}

export default TodoList;
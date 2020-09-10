import React, { useState } from 'react';
import { TodoList } from '../../Components/TodoList';
import { TodoForm } from '../../Components/TodoForm';
import './styles.css';
const initialTodos: Todo[] = [
    {
        text: "Learn js",
        complete: true
    },
    {
        text: "Learn everything",
        complete: false
    }
]

function Main() {
    const [todos, setTodos] = useState(initialTodos);

    const handleTodo = (selectedTodo: Todo) => {
        const newTodo = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodo);
    };
    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false };
        setTodos([...todos, newTodo]);
    }
    return (
        <div id="todo-list">
            <div id="todo-list-content">
                <h1>Todo List</h1>
                <ul>
                    <TodoList todos={todos} handleTodo={handleTodo} />
                    <TodoForm AddTodo={addTodo} />
                </ul>
            </div>
        </div>
    )
}

export default Main;
import React from 'react';

import { TodoListItem } from '../TodoItem/index';

interface Props {
    todos: Todo[];
    handleTodo: handleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, handleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} handleTodo={handleTodo} />
            ))}
        </ul>
    )
}
import React from 'react';
import './styles.css';
interface Props {
    todo: Todo;
    handleTodo: handleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo,handleTodo }) => {
    return (
        <li>
            <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => {
                        handleTodo(todo);
                    }}
                />{' '}
                {todo.text}
            </label>
        </li>
    )
};
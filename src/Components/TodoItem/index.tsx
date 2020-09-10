import React from 'react';
import './styles.css';
interface Props {
    todo: Todo;
    handleTodo: handleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo,handleTodo }) => {
    return (
        <li>
            <label className={todo.complete ? 'complete':''}>
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
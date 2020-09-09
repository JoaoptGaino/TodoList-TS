import React, { useState } from 'react';
interface Props {
    AddTodo: AddTodo;
}
export const TodoForm: React.FC<Props> = ({ AddTodo }) => {
    const [text, setText] = useState('');
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    AddTodo(text);
                    setText('');
                }}
            >
                Add Todo
            </button>
        </form>
    );
};
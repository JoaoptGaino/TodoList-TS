import React, { useState } from 'react';
import './styles.css';
interface Props {
    AddTodo: AddTodo;
}
export const TodoForm: React.FC<Props> = ({ AddTodo }) => {
    const [text, setText] = useState('');
    return (
        <form>
            <div className="input-block">
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
            </div>
        </form>
    );
};
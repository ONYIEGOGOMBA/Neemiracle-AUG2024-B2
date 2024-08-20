import React from 'react';

function TodoItem({ todo, index, toggleComplete, removeTodo }) {
    return (
        <li className="todo-item">
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(index)}
                className="todo-text"
            >
                {todo.text}
            </span>
            <button onClick={() => removeTodo(index)} className="todo-delete-button">X</button>
        </li>
    );
}

export default TodoItem;
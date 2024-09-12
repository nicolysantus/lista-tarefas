import React from 'react';

const Todo = ({ todo, editTodo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" 
    key={todo.id} 
    style={{ textDecoration: todo.isCompleted || todo.status === 'Completo' ? 'line-through' : '' }}>

      <div className="content">
        <p>Título: {todo.título}</p>
        <p>Descrição: {todo.descrição}</p>
        <p>Status: {todo.status}</p>
      </div>
      <div>
        <button className='edit' onClick={() => editTodo(todo.id)}>✎</button>
        <button className='complete' onClick={() => completeTodo(todo.id)}>✔</button>
        <button className='delete' onClick={() => removeTodo(todo.id)}>🗑</button>
      </div>
    </div>
  );
};

export default Todo;

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.done ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
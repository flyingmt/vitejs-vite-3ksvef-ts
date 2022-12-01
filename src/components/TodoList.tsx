import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { Task } from '../redux/tasksSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootState) => {
    return state.tasks;
  });

  return (
    <ul className="tasks-list">
      {todos.map((todo: Task) => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </ul>
  );
};

export default TodoList;

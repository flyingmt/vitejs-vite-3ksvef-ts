import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, Task } from '../redux/tasksSlice';

const TodoItem = ({ id, name }: Task) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    const removeItem: Task = {
      id: id,
      name: name,
    };
    dispatch(deleteTask(removeItem));
  };

  return (
    <li className="task-item">
      <div>{name}</div>
      <div>
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, Task } from '../redux/tasksSlice';

const AddTodo = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert('Enter a task before adding !!');
      setValue('');
      return;
    }

    const newTask: Task = {
      id: 0,
      name: value,
    };

    dispatch(addTask(newTask));

    setValue('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button className="task-button" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default AddTodo;

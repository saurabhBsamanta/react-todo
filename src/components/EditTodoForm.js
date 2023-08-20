import React, { useState } from 'react';

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);
  const handelSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
    setValue('');
  };
  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};

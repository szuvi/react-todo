import * as React from 'react';
import Task from './Task/Task';

function TaskInput(props) {
  const [currTask, setCurrTask] = React.useState('');

  function handleInputChange(e) {
    const input = e.target.value;
    setCurrTask(input);
  }

  function handleTaskAdd() {
    if (currTask.length > 0) {
      props.addTask(new Task(currTask, false));
      setCurrTask('');
    } else {
      //TODO show error
    }
  }

  return (
    <div className="task-input-container">
      <input
        value={currTask}
        onChange={handleInputChange}
        className="task-input"
        type="text"
        placeholder="Input task..."
      />
      <button className="button button-add" onClick={handleTaskAdd}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;

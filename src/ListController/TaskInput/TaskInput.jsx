import * as React from 'react';
import PropTypes from 'prop-types';
import Task from '../../Classes/Task';

function TaskInput({ addTask }) {
  const [currTask, setCurrTask] = React.useState('');

  const textInput = React.useRef(null);
  React.useEffect(() => textInput.current.focus(), []);

  function handleInputChange(e) {
    setCurrTask(e.target.value);
  }

  function handleTaskAdd() {
    if (currTask.length > 0) {
      addTask(new Task(currTask, false));
      setCurrTask('');
    }
  }

  return (
    <div className="task-input-container">
      <input
        ref={textInput}
        value={currTask}
        onChange={handleInputChange}
        onKeyDown={(e) => (e.key === 'Enter' ? handleTaskAdd() : null)}
        className="input input-task"
        type="text"
        placeholder="Input task..."
      />
      <button
        type="button"
        tabIndex="-1"
        className="button button-add"
        onClick={handleTaskAdd}
      >
        Add
      </button>
    </div>
  );
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskInput;

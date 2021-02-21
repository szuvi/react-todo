import * as React from 'react';
import Task from './Task/Task';

function TaskInput(props) {
  const textInput = React.useRef(null);
  React.useEffect(() => textInput.current.focus());

  const [currTask, setCurrTask] = React.useState('');

  function handleInputChange(e) {
    setCurrTask(e.target.value);
  }

  function handleTaskAdd() {
    if (currTask.length > 0) {
      props.addTask(new Task(currTask, false));
      setCurrTask('');
    }
  }

  return (
    <div className="task-input-container">
      <input
        ref={textInput}
        value={currTask}
        onChange={handleInputChange}
        onKeyDown={e => (e.key === 'Enter' ? handleTaskAdd() : null)}
        className="input input-task"
        type="text"
        placeholder="Input task..."
      />
      <button
        tabIndex="-1"
        className="button button-add"
        onClick={handleTaskAdd}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

import * as React from 'react';

function TaskFilterSelector(props) {
  function handleSelection(e) {
    props.setDoneFilter(e.target.value);
  }

  return (
    <div className="task-select-container">
      <label htmlFor="task-select">Show:</label>
      <select
        value={props.doneFilter}
        onChange={handleSelection}
        className="select select-task"
        id="task-select"
      >
        <option value="all">All</option>
        <option value="unfinished">Unfinished</option>
        <option value="finished">Finished</option>
      </select>
    </div>
  );
}

export default TaskFilterSelector;

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
        <option value="">All</option>
        <option value="unfinished">Unfinished</option>
        <option value="finished">Finished</option>
      </select>
    </div>
  );
}

export default TaskFilterSelector;

// Can't assign null to value in <option>.
// To avoid mixing boolean and string,
// I decided to set values as strings
// and deal with them in other component
// (avoiding adding state in this component
//  or two functions based on switch)

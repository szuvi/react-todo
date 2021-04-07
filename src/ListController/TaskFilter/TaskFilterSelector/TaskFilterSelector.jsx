/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import PropTypes from 'prop-types';

function TaskFilterSelector({ setDoneFilter, doneFilter }) {
  function handleSelection(e) {
    setDoneFilter(e.target.value);
  }

  return (
    <div className="task-select-container">
      <label htmlFor="task-select">Show:</label>
      <select
        value={doneFilter}
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

TaskFilterSelector.propTypes = {
  setDoneFilter: PropTypes.func.isRequired,
  doneFilter: PropTypes.string.isRequired,
};

export default TaskFilterSelector;

import * as React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput/SearchInput';
import TaskFilterSelector from './TaskFilterSelector/TaskFilterSelector';

function TaskFilter({ setNameFilter, doneFilter, setDoneFilter }) {
  return (
    <div className="task-filter-container">
      <SearchInput setNameFilter={setNameFilter} />
      <TaskFilterSelector
        doneFilter={doneFilter}
        setDoneFilter={setDoneFilter}
      />
    </div>
  );
}

TaskFilter.propTypes = {
  setNameFilter: PropTypes.func.isRequired,
  doneFilter: PropTypes.string.isRequired,
  setDoneFilter: PropTypes.func.isRequired,
};

export default TaskFilter;

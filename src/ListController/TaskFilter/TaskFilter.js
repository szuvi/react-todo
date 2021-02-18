import * as React from 'react';
import SearchInput from './SearchInput/SearchInput';
import TaskFilterSelector from './TaskFilterSelector/TaskFilterSelector';

function TaskFilter(props) {
  return (
    <div className="task-filter-container">
      <SearchInput setNameFilter={props.setNameFilter} />
      <TaskFilterSelector
        doneFilter={props.doneFilter}
        setDoneFilter={props.setDoneFilter}
      />
    </div>
  );
}

export default TaskFilter;

import * as React from 'react';
import TaskInput from './TaskInput/TaskInput';
import TaskFilter from './TaskFilter/TaskFilter';

function ListController(props) {
  return (
    <div className="list-controller">
      <TaskInput addTask={props.addTask} />
      <TaskFilter
        setNameFilter={props.setNameFilter}
        doneFilter={props.doneFilter}
        setDoneFilter={props.setDoneFilter}
      />
    </div>
  );
}

export default ListController;

import * as React from 'react';
import PropTypes from 'prop-types';
import TaskInput from './TaskInput/TaskInput';
import TaskFilter from './TaskFilter/TaskFilter';

function ListController({ addTask, setNameFilter, doneFilter, setDoneFilter }) {
  return (
    <div className="list-controller">
      <TaskInput addTask={addTask} />
      <TaskFilter
        setNameFilter={setNameFilter}
        doneFilter={doneFilter}
        setDoneFilter={setDoneFilter}
      />
    </div>
  );
}

ListController.propTypes = {
  addTask: PropTypes.func.isRequired,
  setNameFilter: PropTypes.func.isRequired,
  doneFilter: PropTypes.string.isRequired,
  setDoneFilter: PropTypes.func.isRequired,
};

export default ListController;

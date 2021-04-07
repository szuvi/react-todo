import * as React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import TaskListItem from './TaskListItem/TaskListItem';
import Task from '../Classes/Task';

function TaskList({ filter, tasks, toggleDone, removeTask }) {
  function filterByName(name) {
    return name.includes(filter.name);
  }

  function filterByDone(done) {
    if (filter.done !== null) {
      return done === filter.done;
    }
    return true;
  }

  const filteredTasks = tasks.reduce((acc, task) => {
    if (filterByName(task.name) && filterByDone(task.done)) {
      acc.push(
        <TaskListItem
          toggleDone={toggleDone}
          removeTask={removeTask}
          key={uuid()}
          task={task}
        />
      );
    }
    return acc;
  }, []);

  return <div className="task-list">{filteredTasks}</div>;
}

TaskList.propTypes = {
  filter: PropTypes.shape({
    name: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  toggleDone: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TaskList;

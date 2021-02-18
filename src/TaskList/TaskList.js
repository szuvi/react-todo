import * as React from 'react';
import {v4 as uuid} from 'uuid';
import TaskListItem from './TaskListItem/TaskListItem';

function TaskList(props) {
  const filter = props.filter;

  function filterByName(name) {
    return name.includes(filter.name);
  }

  function filterByDone(done) {
    if (filter.done !== null) return done === filter.done;
    else return true;
  }

  const filteredTasks = props.tasks.reduce((acc, task) => {
    if (filterByName(task.name) && filterByDone(task.done)) {
      acc.push(
        <TaskListItem
          toggleDone={props.toggleDone}
          removeTask={props.removeTask}
          key={uuid()}
          task={task}
        />,
      );
    }
    return acc;
  }, []);

  return <div className="task-list">{filteredTasks}</div>;
}

export default TaskList;

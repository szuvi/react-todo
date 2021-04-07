import * as React from 'react';
import PropTypes from 'prop-types';
import Task from '../../Classes/Task';

function TaskListItem({ toggleDone, removeTask, task }) {
  function handleToggle() {
    toggleDone(task.id);
  }

  function handleDelete() {
    removeTask(task.id);
  }

  return (
    <ul className="task-list-item">
      <div
        className={`checkbox-container ${task.done ? 'checkbox-checked' : ''}`}
      >
        <input
          onChange={handleToggle}
          className="task-list-checkbox"
          type="checkbox"
          checked={task.done}
        />
      </div>
      <p className="task-list-name">{task.name}</p>
      <button
        type="button"
        onClick={handleDelete}
        className="button button-delete-task"
      >
        X
      </button>
    </ul>
  );
}

TaskListItem.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.instanceOf(Task).isRequired,
};

export default TaskListItem;

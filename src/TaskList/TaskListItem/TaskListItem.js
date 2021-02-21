import * as React from 'react';

function TaskListItem(props) {
  function toggleDone() {
    props.toggleDone(props.task.id);
  }

  function handleDelete() {
    props.removeTask(props.task.id);
  }

  return (
    <ul className="task-list-item">
      <div
        className={`checkbox-container ${
          props.task.done ? 'checkbox-checked' : ''
        }`}
      >
        <input
          onChange={toggleDone}
          className="task-list-checkbox"
          type="checkbox"
          checked={props.task.done}
        />
      </div>
      <p className="task-list-name">{props.task.name}</p>
      <button onClick={handleDelete} className="button button-delete-task">
        X
      </button>
    </ul>
  );
}

export default TaskListItem;

import * as React from 'react';

function TaskListItem(props) {
  function toggleDone() {
    props.toggleDone(props.task.id);
  }

  function handleDelete() {
    props.removeTask(props.task.id);
  }

  //TODO some styling on hover and transition like 0.1s
  //TODO test if checkbox classes work
  //TODO insert icon instead of X
  //TODO maybe EDIT?

  return (
    <ul className="task-list-item">
      <div
        className={`checkbox-container ${
          props.task.done ? 'checkbox-checked' : 'checkbox-unchecked'
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

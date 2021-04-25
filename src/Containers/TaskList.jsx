/* eslint-disable react/require-default-props */
import * as React from 'react';
import PropTypes from 'prop-types';
import Task from '../Classes/Task';
import Container from '../Components/Container';
import TaskRow from './TaskRow';

function passesFilters(task, filters) {
  return (
    task.name.toLowerCase().includes(filters.phraseFilter.toLowerCase()) &&
    (filters.doneFilter === null || filters.doneFilter === task.done)
  );
}

function TaskList({ list = [], toggleDone, deleteTask, filters }) {
  return (
    <Container as="ul">
      {list.map(
        (task) =>
          passesFilters(task, filters) && (
            <TaskRow
              as="li"
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleDone={toggleDone}
            />
          )
      )}
    </Container>
  );
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(Task)),
  toggleDone: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    doneFilter: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.bool])
      .isRequired,
    phraseFilter: PropTypes.string.isRequired,
  }),
};

export default TaskList;

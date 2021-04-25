import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Components/Row';
import Task from '../Classes/Task';
import ClearButton from '../Components/ClearButton';

const RowOfThree = styled(Row)`
  grid-template-columns: auto 1fr auto;
`;

function TaskRow({ task, deleteTask, toggleDone }) {
  const { name, done, id } = task;

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleToggle = () => {
    toggleDone(id);
  };

  return (
    <RowOfThree center gap="1rem">
      <input type="checkbox" checked={done} onChange={handleToggle} />
      <h3 style={{ lineHeight: '100%' }}>{name}</h3>
      <ClearButton onClick={handleDelete} size="1.3rem">
        ❌
      </ClearButton>
    </RowOfThree>
  );
}

TaskRow.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
};

export default TaskRow;

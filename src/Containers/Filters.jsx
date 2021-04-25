/* eslint-disable no-nested-ternary */
import * as React from 'react';
import PropTypes from 'prop-types';
import Row from '../Components/Row';
import Input from '../Components/Input';

function Filters({ searchValue, setSearchValue, doneValue, setDoneValue }) {
  const isDone =
    doneValue === null ? 'all' : doneValue ? 'finished' : 'unfinished';

  const handleInputChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSelectChange = ({ target: { value } }) => {
    setDoneValue(value);
  };

  return (
    <Row>
      <Input
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Input as="select" value={isDone} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="unfinished">Unfinished</option>
        <option value="finished">Finished</option>
      </Input>
    </Row>
  );
}

Filters.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  doneValue: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.bool])
    .isRequired,
  setDoneValue: PropTypes.func.isRequired,
};

export default Filters;

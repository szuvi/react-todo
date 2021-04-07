import * as React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ setNameFilter }) {
  function handleChange(e) {
    setNameFilter(e.target.value);
  }
  return (
    <input
      onChange={handleChange}
      className="input input-search"
      type="text"
      placeholder="Filter tasks..."
    />
  );
}

SearchInput.propTypes = {
  setNameFilter: PropTypes.func.isRequired,
};

export default SearchInput;

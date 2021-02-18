import * as React from 'react';

function SearchInput(props) {
  function handleChange(e) {
    props.setNameFilter(e.target.value);
  }
  return (
    <input
      onChange={handleChange}
      className="search-input"
      type="text"
      placeholder="Filter tasks..."
    />
  );
}

export default SearchInput;

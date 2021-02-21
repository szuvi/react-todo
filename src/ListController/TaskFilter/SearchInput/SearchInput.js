import * as React from 'react';

function SearchInput(props) {
  function handleChange(e) {
    props.setNameFilter(e.target.value);
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

export default SearchInput;

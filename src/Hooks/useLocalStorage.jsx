import * as React from 'react';

function useLocalStorage(reducer, initialState, key) {
  const initializer = (initial) => {
    const valueFromLS = localStorage.getItem(key);
    return valueFromLS != null
      ? { ...initial, [key]: JSON.parse(valueFromLS) }
      : initial;
  };

  const [state, dispatch] = React.useReducer(
    reducer,
    initialState,
    initializer
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state[key]));
  }, [key, state[key]]);

  return [state, dispatch];
}

export default useLocalStorage;

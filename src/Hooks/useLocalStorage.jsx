import * as React from 'react';

function useLocalStorage(reducer, initialState, key) {
  const valueFromLS = localStorage.getItem(key);
  const initialized = valueFromLS
    ? { ...initialState, [key]: JSON.parse(valueFromLS) }
    : initialState;

  const [state, dispatch] = React.useReducer(reducer, initialized);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state[key]));
  }, [key, state[key]]);

  return [state, dispatch];
}

export default useLocalStorage;

import * as React from 'react';

function useLocalStorage(reducer, initialState, key) {
  const init = (initState) => {
    const valueFromLS = localStorage.getItem(key);

    if (valueFromLS) {
      return {
        ...initState,
        [key]: JSON.parse(valueFromLS),
      };
    }
    return initState;
  };

  const [state, dispatch] = React.useReducer(reducer, initialState, init);

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state[key]));
  }, [key, state[key]]);

  return [state, dispatch];
}

export default useLocalStorage;

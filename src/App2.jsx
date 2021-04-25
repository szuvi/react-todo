import React from 'react';

import Task from './Classes/Task';
import Container from './Components/Container';
import Header from './Components/Header';
import Filters from './Containers/Filters';
import TaskInput from './Containers/TaskInput';
import TaskList from './Containers/TaskList';
import useLocalStorage from './Hooks/useLocalStorage';

function taskListReducer(state, action) {
  switch (action.type) {
    case 'input': {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case 'delete': {
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.id),
      };
    }
    case 'add': {
      return {
        ...state,
        taskList: [...state.taskList, action.task],
      };
    }
    case 'toggleDone': {
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id === action.id) {
            const { done } = task;
            return {
              ...task,
              done: !done,
            };
          }
          return task;
        }),
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  taskList: [],
  searchInput: '',
  doneFilter: null,
};

function App() {
  const [state, dispatch] = useLocalStorage(
    taskListReducer,
    initialState,
    'taskList'
  );

  const addTask = (taskName) => {
    const newTask = new Task(taskName, false);
    dispatch({ type: 'add', task: newTask });
  };

  const setSearchFilter = (input) => {
    dispatch({ type: 'input', name: 'searchInput', value: input });
  };

  const setDoneFilter = (input) => {
    const convertedInputValue = input === 'all' ? null : input === 'finished';
    dispatch({ type: 'input', name: 'doneFilter', value: convertedInputValue });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'delete', id });
  };

  const toggleDone = (id) => {
    dispatch({ type: 'toggleDone', id });
  };

  return (
    <Container centered>
      <Header>Not So Boring ToDo App</Header>
      <Container>
        <TaskInput addTask={addTask} />
        <Filters
          searchValue={state.searchInput}
          setSearchValue={setSearchFilter}
          doneValue={state.doneFilter}
          setDoneValue={setDoneFilter}
        />
      </Container>
      <Container>
        <TaskList
          filters={{
            doneFilter: state.doneFilter,
            phraseFilter: state.searchInput,
          }}
          list={state.taskList}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      </Container>
    </Container>
  );
}

export default App;

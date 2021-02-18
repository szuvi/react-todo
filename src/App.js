import * as React from 'react';
import TaskList from './TaskList/TaskList';
import ListController from './ListController/ListController';

function App() {
  const [taskList, setList] = React.useState([]);
  const [nameFilter, setNameFilter] = React.useState('');
  const [doneFilter, setDoneFilter] = React.useState(null);

  const filter = {
    name: nameFilter,
    done: (function determineDoneFilter() {
      switch (doneFilter) {
        case 'all':
          return null;
        case 'unfinished':
          return false;
        case 'finished':
          return true;
        default:
          return null;
      }
    })(),
  };
  //TODO Clean this mess up! How to implement conditional obj properies?
  //     I want done to show only if it is not null!

  function addTask(task) {
    const newList = [...taskList, task];
    setList(newList);
  }

  function toggleDone(id) {
    // Should used useReducer here? This might be inefficient
    const newList = taskList.reduce((acc, task) => {
      if (task.id === id) {
        let {name, done, id} = task;
        done = !done;
        acc.push({name, done, id});
      } else {
        acc.push(task);
      }
      return acc;
    }, []);
    setList(newList);
  }

  function removeTask(id) {
    const newList = taskList.filter(task => task.id !== id);
    setList(newList);
  }

  function removeAllTasks() {
    setList([]);
  }

  // for (let i = 0; i < 100; i++) {
  //   tasks.push(new Task(`Task number ${i}`, !!Math.floor(Math.random() * 2)));
  // }
  // console.log(tasks);

  return (
    <div className="main-container">
      <div className="app-container">
        <h1 className="title">Boring To Do List</h1>
        <ListController
          addTask={addTask}
          removeAllTasks={removeAllTasks}
          setNameFilter={setNameFilter}
          doneFilter={doneFilter}
          setDoneFilter={setDoneFilter}
        />
        <TaskList
          toggleDone={toggleDone}
          removeTask={removeTask}
          tasks={taskList}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;

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

  function addTask(task) {
    const newList = [...taskList, task];
    setList(newList);
  }

  function toggleDone(id) {
    const newList = taskList.reduce((acc, task) => {
      if (task.id === id) {
        let {done} = task;
        acc.push({...task, done: !done});
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

  return (
    <div
      className="main-container"
      style={{display: taskList.length > 0 ? 'block' : 'grid'}}
    >
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

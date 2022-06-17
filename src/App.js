import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import React from 'react';

function App() {

  const [tasksItems, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasks([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = task => {
    setTasks(tasksItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)));
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  const cleanTasks = () => {
    setTasks(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {
          showCompleted === true && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }
      </div>
    </main>
  );
}

export default App;

import "./App.css";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  //Add Task
  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchData();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchData = async () => {
    const result = await fetch(
      "https://task-tracker-e3b91-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "GET",
      }
    );
    const data = await result.json();
    return data;
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(
      `https://task-tracker-e3b91-default-rtdb.firebaseio.com/tasks.json`,
      {
        method: "DELETE",
      }
    );
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.reminder = !task.reminder;
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

export default App;

import "./App.css";

import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

let tasks1 = [
  {
    id: 1,
    text: "Book a flight",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Buy a new car",
    day: "Feb 6th at 1:00pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Buy a new house",
    day: "Feb 7th at 12:00pm",
    reminder: true,
  },
  {
    id: 4,
    text: "Buy a new house",
    day: "Feb 8th at 12:00pm",
    reminder: false,
  },
  {
    id: 5,
    text: "Buy a new house",
    day: "Feb 9th at 12:00pm",
    reminder: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(tasks1);
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAdd(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDelete(deletedTask){
    setTasks(tasks.filter((t)=> t.text !== deletedTask));
  }

  const visibleTask = tasks.filter((ta)=> category === "All" || ta.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={CATEGORIES}
      selectedCat={category}
      onSelectedCat={setCategory} />
      <div className="tasks">
      <NewTaskForm
      categories={CATEGORIES.filter((c)=>c !== "All")}
      onTaskFormSubmit ={handleAdd}/>
      <TaskList onDeleteTask={handleDelete} tasks={visibleTask} />
    </div>
  </div>
  );
}

export default App;

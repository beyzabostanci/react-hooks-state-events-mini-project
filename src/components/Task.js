import React from "react";

function Task({text, category, onDeleteTask}) {
  function handleTask(){
    onDeleteTask(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleTask}>X</button>
    </div>
  );
}
//Update the Task component so that it shows the task's text and category.
//When the delete button is clicked, the task should be removed from the list.

export default Task;

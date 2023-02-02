import React, { useState } from "react";
import Filter from "./components/filters/Filters";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks); // Preserve initial state

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  function addTask(name) {
    const newTask = { id: 'id' , name , completed: false };
    setTasks([...tasks , newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>To-Do</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <Filter />
        <Filter />
        <Filter />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

import { TodoCounter } from "./componets/TodoCounter/TodoCounter";
import { TodoItem } from "./componets/TodoItem/TodoItem";
import { TodoList } from "./componets/TodoList/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton/CreateTodoButton";
import { TodoHeader } from "./componets/header/TodoHeader";
import { TodoSearch } from "./componets/TodoSearch/TodoSearch";
import { TodoCreate } from "./componets/TodoCreate/TodoCreate";
import "./App.scss";
import React, { useState } from "react";

const todos = [
  { text: "tarea 1", completed: false },
  { text: "tarea 2", completed: true },
  { text: "tarea 3", completed: false },
  { text: "tarea 4", completed: true },
  { text: "tarea 5", completed: false },
  { text: "tarea 6", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);

  const totalTodos = todos.length;
  const completeTodos = 200;
  const todossss = 200;

  return (
    <React.Fragment>
      <TodoHeader></TodoHeader>

      <main className="contentMain">
        <div className="todoSearchContainer">
          <TodoCreate />
          <CreateTodoButton />
        </div>

        <div className="containerCongrats">
          <p className="containerCongrats__text">
            <span className="containerCount__text--right">
              {"¡Has Completado "}
            </span>
            <span className="containerCount__text--left">
              {"todos los TODOS!"}
            </span>
          </p>
        </div>
        <TodoCounter completed={2} total={1} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          <TodoItem
            key={todos.text}
            tarea={todos.text}
            status={todos.completed}
          />
        </TodoList>
      </main>
    </React.Fragment>
  );
}

export default App;

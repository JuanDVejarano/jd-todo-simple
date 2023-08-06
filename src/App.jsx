import { TodoCounter } from "./componets/TodoCounter/TodoCounter";
import { TodoItem } from "./componets/TodoItem/TodoItem";
import { TodoList } from "./componets/TodoList/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton/CreateTodoButton";
import { TodoHeader } from "./componets/header/TodoHeader";
import { TodoSearch } from "./componets/TodoSearch/TodoSearch";
import { TodoCreate } from "./componets/TodoCreate/TodoCreate";
import "./App.scss";
import React, { useState } from "react";

const defaultTodo = [
  { text: "tarea 1", completed: false },
  { text: "tarea 2", completed: true },
  { text: "tarea 3", completed: false },
  { text: "tarea 4", completed: true },
  { text: "tarea 5", completed: true },
  { text: "tarea 6", completed: false },
  { text: "tarea 7", completed: false },
  { text: "tarea 8", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState(""); //Estado para capturar lo que se escribe en el input de busqueda
  const [listTodo, setListTodo] = React.useState(defaultTodo);
  //console.log(searchValue);

  const totalTodos = listTodo.length; //Estado deribadon total de tareas
  const completeTodos = listTodo.filter((todo) => !!todo.completed).length; // estado deribado tareas terminadas
  const serchedTodos = listTodo.filter((serchedTodo) => {
    return serchedTodo.text.includes(searchValue);
  });
  console.log(serchedTodos);
  //console.log(completeTodos);

  return (
    <React.Fragment>
      <TodoHeader></TodoHeader>

      <main className="contentMain">
        <div className="todoSearchContainer">
          <TodoCreate />
          <CreateTodoButton />
        </div>

        <TodoCounter completed={completeTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {serchedTodos.map((todos) => (
            <TodoItem
              key={todos.text}
              tarea={todos.text}
              status={todos.completed}
            />
          ))}
        </TodoList>
      </main>
    </React.Fragment>
  );
}

export default App;

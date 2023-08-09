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
  { text: "Hacer ejercicio", completed: false },
  { text: "Comer sano", completed: true },
  { text: "Terminar curso de react", completed: false },
  { text: "Hacer un curso de angular", completed: true },
  { text: "Hacer la pagina de regalos", completed: true },
  { text: "Hacer pa pagina de Jaime", completed: false },
  { text: "Comprara los ingredientes del sushi", completed: true },
  { text: "Hacer sushi", completed: false },
];

function App() {
  //#region variables, estados y funciones

  //#region estados
  const [searchValue, setSearchValue] = React.useState(""); //Estado para capturar lo que se escribe en el input de busqueda
  const [listTodo, setListTodo] = React.useState(defaultTodo);
  //console.log(searchValue);

  const totalTodos = listTodo.length; //Estado deribadon total de tareas
  const completeTodos = listTodo.filter((todo) => !!todo.completed).length; // estado deribado tareas terminadas
  const serchedTodos = listTodo.filter((serchedTodo) => {
    return serchedTodo.text.toLowerCase().includes(searchValue.toLowerCase());
  }); //Estado deribado para filtrar las tareas
  //console.log(serchedTodos);
  //console.log(completeTodos);
  //#endregion

  //#region fucnion completado
  const fcompleteTodo = (text) => {
    // metodo completar tareas
    const newTodos = [...listTodo]; // se crea una copia del arreglo
    const todoIndex = newTodos.findIndex((todo) => todo.text == text); // se identifica el item de la lista
    newTodos[todoIndex].completed
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true); // cambiar de estado de completo(true) a incompleto(flase) en el estado de la tarea
    setListTodo(newTodos); // se actualiza el estado de la lista con la nueva lista
  };
  //#endregion

  //#endregion

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
              onComplete={() => fcompleteTodo(todos.text)}
            />
          ))}
        </TodoList>
      </main>
    </React.Fragment>
  );
}

export default App;

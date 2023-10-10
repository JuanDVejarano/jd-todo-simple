import { TodoCounter } from "./componets/TodoCounter/TodoCounter";
import { TodoItem } from "./componets/TodoItem/TodoItem";
import { TodoList } from "./componets/TodoList/TodoList";
import { CreateTodoButton } from "./componets/CreateTodoButton/CreateTodoButton";
import { TodoHeader } from "./componets/Header/TodoHeader";
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

  //#region creacion localStorage
  var localStorageTodo = localStorage.getItem("TODO_JD");
  if (
    localStorageTodo == null ||
    localStorageTodo == "" ||
    localStorageTodo == undefined
  ) {
    let stringTodo = JSON.stringify(defaultTodo);
    localStorage.setItem("TODO_JD", stringTodo);
  }

  //localStorage.removeItem("TODO_JD");

  let parsedTodos = JSON.parse(localStorageTodo);

  //#endregion

  //#region estados

  const [searchValue, setSearchValue] = React.useState(""); //Estado para capturar lo que se escribe en el input de busqueda
  const [newValue, setNewVale] = React.useState("");
  const [listTodo, setListTodo] = React.useState(parsedTodos);
  //console.log(searchValue);

  const totalTodos = listTodo.length; //Estado deribadon total de tareas
  const completeTodos = listTodo.filter((todo) => !!todo.completed).length; // estado deribado tareas terminadas
  const serchedTodos = listTodo.filter((serchedTodo) => {
    return serchedTodo.text.toLowerCase().includes(searchValue.toLowerCase());
  }); //Estado deribado para filtrar las tareas

  //#endregion

  //#region fucnion completado
  const fCompleteTodo = (text) => {
    // metodo completar tareas
    const newTodos = [...listTodo]; // se crea una copia del arreglo
    const todoIndex = newTodos.findIndex((todo) => todo.text == text); // se identifica el item de la lista
    newTodos[todoIndex].completed
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true); // cambiar de estado de completo(true) a incompleto(flase) en el estado de la tarea
    updateTodo(newTodos); // se actualiza el estado de la lista con la nueva lista
  };
  //#endregion

  //#region funcion deleteTask
  const fDeleteTodo = (text) => {
    //debugger;
    const newListTodo = [...listTodo];
    const todoIndex = newListTodo.findIndex((element) => element.text === text);
    newListTodo.splice(todoIndex, 1);
    updateTodo(newListTodo);
  };
  //#endregion

  //#region actualizar localStorage
  const updateTodo = (newTodos) => {
    let stringTodo = JSON.stringify(newTodos);
    setListTodo(newTodos);
    localStorage.setItem("TODO_JD", stringTodo);
  };
  //#endregion

  //#region Crear todo
  const fCreateTodo = () => {
    const newListTodo = [...listTodo];
    newListTodo.push({ text: newValue, completed: false });
    updateTodo(newListTodo);
  };
  //#endregion

  //#endregion

  //#region componente
  return (
    <React.Fragment>
      <TodoHeader></TodoHeader>

      <main className="contentMain">
        <div className="containerCreateTodo">
          <TodoCreate newValue={newValue} setNewVale={setNewVale} />
          <CreateTodoButton onCreate={() => fCreateTodo()} />
        </div>

        <TodoCounter completed={completeTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {serchedTodos.map((todos) => (
            <TodoItem
              key={todos.text}
              tarea={todos.text}
              status={todos.completed}
              onComplete={() => fCompleteTodo(todos.text)}
              onDelete={() => fDeleteTodo(todos.text)}
            />
          ))}
        </TodoList>
      </main>
    </React.Fragment>
  );
  //#endregion
}

export default App;

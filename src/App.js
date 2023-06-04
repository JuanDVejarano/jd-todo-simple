import { TodoCounter } from './componets/TodoCounter/TodoCounter';
import { TodoItem } from './componets/TodoItem/TodoItem';
import { TodoSearch } from './componets/TodoSearch/TodoSearch';
import { TodoList } from './componets/TodoList/TodoList';
import { CreateTodoButton } from './componets/CreateTodoButton/CreateTodoButton';
import './App.scss';
import React from 'react';

const defaultTodo = [
    {key: 1, tetx: 'tarea 1', completed: false},
    {key: 2, tetx: 'tarea 2', completed: false},
    {key: 3, tetx: 'tarea 3', completed: false},
    {key: 4, tetx: 'tarea 4', completed: false},
    {key: 5, tetx: 'tarea 5', completed: false}
]

function App() {
    return (
        <React.Fragment>

            <h1>Hola Mundo</h1>
            <TodoCounter completed={5} total={10}/>
        
            <TodoList>
                {defaultTodo.map(todo => (
                    <TodoItem key={todo.key} tarea={todo.tetx} status={todo.completed}/>
                ))}
            </TodoList>

            <CreateTodoButton/>
        </React.Fragment>
    );
}

export default App;

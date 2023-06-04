function TodoCounter( { total, completed} ){
    return(
        <div>
            <h1>Has completado {completed} de {total} Tareas</h1>
        </div>
    );
}

export { TodoCounter };
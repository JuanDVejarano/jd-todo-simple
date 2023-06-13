import './TodoCounter.scss'

function TodoCounter( { total, completed} ){
    return(
        <div className="containerCount">
            <p className="containerCount__text">Tarefas creadas: <span>{total}</span></p>
            <p className="containerCount__text">Concluídas: <span>{completed}</span></p> 
        </div>
    );
}

export { TodoCounter };
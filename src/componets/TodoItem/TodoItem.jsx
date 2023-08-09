import "./TodoItem.scss";
import trash from "../../assets/hover=false.svg";
function TodoItem(props) {
  return (
    <li
      className={`${
        !!props.status ? "containerTodoItem--active" : "containerTodoItem"
      }`}
    >
      <button
        onClick={props.onComplete}
        className="containerTodoItem__mark"
      ></button>
      <p className="containerTodoItem__text">{props.tarea}</p>
      <button
        className="containerTodoItem__deleteButton"
        onClick={props.onDelete}
      >
        <img src={trash} alt="eliminar" />
      </button>
    </li>
  );
}

export { TodoItem };

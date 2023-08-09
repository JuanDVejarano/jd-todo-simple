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
      <img
        className="containerTodoItem__deleteButton"
        src={trash}
        alt="eliminar"
      />
    </li>
  );
}

export { TodoItem };

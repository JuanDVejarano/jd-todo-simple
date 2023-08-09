import "./TodoItem.scss";
import { IconLibrary } from "../../assets/IconLibrary/IconLibrary";
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
        <IconLibrary type={"iconDelete"} />
        {/*<img src={trash} alt="eliminar" />*/}
      </button>
    </li>
  );
}

export { TodoItem };

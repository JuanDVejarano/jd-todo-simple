import "./CreateTodoButton.scss";
import plus from "../../assets/plus.svg";
function CreateTodoButton() {
  return (
    <div>
      <button className="button" type="sumit">
        <p>Crear</p>
        <img className="plusImg" src={plus} alt="plus" />
      </button>
    </div>
  );
}

export { CreateTodoButton };

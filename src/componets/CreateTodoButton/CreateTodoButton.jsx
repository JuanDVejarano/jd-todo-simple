import "./CreateTodoButton.scss";
import { IconLibrary } from "../../assets/IconLibrary/IconLibrary";
function CreateTodoButton(props) {
  return (
    <div>
      <button className="button" onClick={props.onCreate}>
        <p>Crear</p>
        <div className="plusImg">
          <IconLibrary type={"iconPlus"} color={"white"} />
        </div>
      </button>
    </div>
  );
}

export { CreateTodoButton };

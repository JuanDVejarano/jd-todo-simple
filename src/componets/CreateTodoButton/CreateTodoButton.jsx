import "./CreateTodoButton.scss";
import { IconLibrary } from "../../assets/IconLibrary/IconLibrary";
function CreateTodoButton() {
  return (
    <div>
      <button className="button" type="sumit">
        <p>Crear</p>
        <div className="plusImg">
          <IconLibrary type={"iconPlus"} />
        </div>
      </button>
    </div>
  );
}

export { CreateTodoButton };

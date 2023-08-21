import "./CreateTodoButton.scss";
import { IconLibrary } from "../../assets/IconLibrary/IconLibrary";
function CreateTodoButton() {
  return (
    <div>
      <button className="button" type="sumit">
        <p>Crear</p>
        <div className="plusImg">
          <IconLibrary type={"iconPlus"} color={"white"} />
        </div>
      </button>
    </div>
  );
}

export { CreateTodoButton };

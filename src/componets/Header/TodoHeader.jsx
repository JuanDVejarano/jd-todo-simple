import "./TodoHeader.scss";
import { IconLibrary } from "../../assets/IconLibrary/IconLibrary";

function TodoHeader() {
  return (
    <header className="containerHeader">
      <div className="containerTitle">
        <div className="containerTitle__img">
          <IconLibrary type={"iconRoket"} />
        </div>
        <p className="containerTitle__title">
          to<span>do</span>
        </p>
      </div>
    </header>
  );
}

export { TodoHeader };

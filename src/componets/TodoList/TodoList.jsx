import "./TodoList.scss";

function TodoList(props) {
  return <ul className="contentTodo">{props.children}</ul>;
}

export { TodoList };

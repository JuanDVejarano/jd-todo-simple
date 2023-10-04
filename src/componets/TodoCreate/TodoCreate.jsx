import "./TodoCreate.scss";
function TodoCreate({ newValue, setNewVale }) {
  return (
    <input
      className="todoCreate"
      type="text"
      placeholder="Añadir nueva tarea"
      value={newValue}
      onChange={(evet) => {
        setNewVale(evet.target.value);
      }}
    />
  );
}

export { TodoCreate };

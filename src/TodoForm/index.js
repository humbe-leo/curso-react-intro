import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setModalOpen } = useContext(TodoContext);

  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todoTitle);
    setModalOpen(false);
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  const updateTitle = (e) => {
    const {
      target: { value },
    } = e;
    setTodoTitle(value);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Mi nuevo TODO"
        value={todoTitle}
        onChange={updateTitle}
      />
      <div className="todoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="todoForm-button todoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="todoForm-button todoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

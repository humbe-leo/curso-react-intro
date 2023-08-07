import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCreateButton.css";

function TodoCreateButton() {
  const { setModalOpen } = useContext(TodoContext);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <button
      title="Agregar TODO"
      className="todoCreateButton"
      onClick={toggleModal}
    >
      +
    </button>
  );
}

export { TodoCreateButton };

import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos, loading } = useContext(TodoContext);

  if (loading) {
    return <h1 className="todoCounter">Cargando TODOs...</h1>;
  }

  if (totalTodos === completedTodos && completedTodos > 0) {
    return (
      <h1 className="todoCounter todoCounter--completed">
        ¡Felicidades! Completaste todas tus tareas :)
      </h1>
    );
  }

  return (
    <h1 className="todoCounter">
      {totalTodos === 0 ? (
        "No tienes TODOs. Agrega uno para comenzar :)"
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </>
      )}
    </h1>
  );
}

export { TodoCounter };

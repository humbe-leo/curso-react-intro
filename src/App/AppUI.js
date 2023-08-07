import { TodoCreateButton } from "../TodoCreateButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { loading, error, filteredTodos, completeTodo, deleteTodo, modalOpen } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading ? <TodoLoading /> : null}
        {error ? <TodoError /> : null}
        {filteredTodos.map(({ text, completed }, index) => (
          <TodoItem
            key={index}
            index={index}
            title={text}
            completed={completed}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>

      <TodoCreateButton />

      <Modal isOpen={modalOpen}>
        <TodoForm />
      </Modal>
    </>
  );
}

export { AppUI };

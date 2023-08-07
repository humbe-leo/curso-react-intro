import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const normalizeString = (string) => {
    string = string || "";
    string = string.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    string = string.trim();
    return string;
  };

  const addTodo = (title) => {
    const newTodos = [...todos, { text: title, completed: false }];

    saveTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (index === i) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((todo) => {
    let normalizedTodo = normalizeString(todo.text);
    let normalizedSearch = normalizeString(searchValue);

    return normalizedTodo.includes(normalizedSearch);
  });

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        error,
        filteredTodos,
        loading,
        modalOpen,
        searchValue,
        totalTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        setModalOpen,
        setSearchValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

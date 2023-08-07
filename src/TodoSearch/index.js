import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue, loading } = useContext(TodoContext);

  return (
    <input
      disabled={loading}
      type="search"
      value={searchValue}
      placeholder={loading ? "..." : "Buscar TODO..."}
      className="todoSearch"
      onChange={({ target: { value } }) => setSearchValue(value)}
    />
  );
}

export { TodoSearch };

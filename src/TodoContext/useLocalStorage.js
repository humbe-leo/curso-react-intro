import { useEffect, useState } from "react";

/* const defaultTodos = [
  { text: "Crear estructura del proyecto", completed: true },
  { text: "Crear repositorio del proyecto", completed: false },
  { text: "Crear base de datos", completed: false },
  { text: "Crear Mockups", completed: false },
]; */

function useLocalStorage(keyName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(keyName);
        let parsedItems;

        if (!localStorageItems) {
          localStorage.setItem(keyName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItems(parsedItems);
        }

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, [keyName, initialValue]);

  const saveItems = (newItems) => {
    localStorage.setItem(keyName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };

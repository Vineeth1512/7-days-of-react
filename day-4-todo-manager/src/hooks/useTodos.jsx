import { useCallback, useEffect, useReducer } from "react";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

function useTodos() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = useCallback((title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  }, []);

  // Toggle todo
  const toggleTodo = useCallback((id) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  }, []);

  // Remove todo
  const removeTodo = useCallback((id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}

export default useTodos;

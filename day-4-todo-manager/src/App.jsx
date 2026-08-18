import { useEffect, useMemo, useRef, useState } from "react";

import useTodos from "./hooks/useTodos";
import TodoItem from "./components/TodoItem";

function App() {
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const inputRef = useRef(null);

  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  // Auto focus input when app loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Filter todos
  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  }, [todos, filter]);

  // Todo statistics
  const totalTodos = todos.length;

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const pendingTodos = todos.filter((todo) => !todo.completed).length;

  // Add todo
  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      inputRef.current.focus();
      return;
    }

    addTodo(title.trim());

    setTitle("");

    inputRef.current.focus();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-2xl px-4">
        {/* Header */}
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Todo Manager
        </h1>

        {/* Add Todo */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter new Todo..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Add Todo
            </button>
          </form>
        </div>

        {/* Todo List */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Todo List
          </h2>

          {filteredTodos.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-gray-500">No todos found.</p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={removeTodo}
              />
            ))
          )}
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-xl bg-white p-4 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Filter Todos
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "rounded-lg bg-gray-800 px-4 py-2 font-medium text-white"
                  : "rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
              }
            >
              All
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={
                filter === "completed"
                  ? "rounded-lg bg-green-600 px-4 py-2 font-medium text-white"
                  : "rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
              }
            >
              Completed
            </button>

            <button
              onClick={() => setFilter("pending")}
              className={
                filter === "pending"
                  ? "rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white"
                  : "rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
              }
            >
              Pending
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Todo Statistics
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <p className="text-sm text-gray-500">Total</p>

              <p className="text-2xl font-bold text-gray-800">{totalTodos}</p>
            </div>

            <div className="rounded-lg bg-green-50 p-4 text-center">
              <p className="text-sm text-gray-500">Completed</p>

              <p className="text-2xl font-bold text-green-600">
                {completedTodos}
              </p>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4 text-center">
              <p className="text-sm text-gray-500">Pending</p>

              <p className="text-2xl font-bold text-yellow-600">
                {pendingTodos}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

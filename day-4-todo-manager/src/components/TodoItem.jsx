import { memo } from "react";

const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Todo information */}
      <div className="flex items-center gap-3">
        <span className="text-xl">{todo.completed ? "✅" : "⬜"}</span>

        <span>{todo.title}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={
            todo.completed
              ? "rounded-lg bg-yellow-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-yellow-600"
              : "rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          }
        >
          {todo.completed ? "Incomplete" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
});

export default TodoItem;

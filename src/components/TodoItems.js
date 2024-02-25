/* eslint-disable react/prop-types */
import { HiTrash, HiPencilAlt, HiCheck } from "react-icons/hi";

const TodoItems = ({ todo, index, setEdit, toggleComplete, removeTodo }) => {
  return (
    <li className="flex flex-col bg-white p-3 rounded shadow-md mb-3">
      <span
        className={`${
          todo.completed ? "completed text-lg line-through" : "text-lg"
        }`}
        style={{
          maxWidth: "100%", // Sesuaikan nilai ini untuk mengontrol lebar maksimum
          wordWrap: "break-word",
        }}
      >
        {todo.todo}
      </span>
      <div className="mt-2 flex items-end justify-end">
        {!todo.completed && (
          <button
            onClick={() => toggleComplete(todo.id)}
            className="btn bg-green-500 text-white mr-2"
          >
            <HiCheck />
          </button>
        )}

        {!todo.completed && (
          <button
            onClick={() => setEdit(index)}
            className="btn bg-yellow-500 text-white mr-2"
          >
            <HiPencilAlt />
          </button>
        )}

        <button
          onClick={() => removeTodo(todo.id)}
          className="btn bg-red-500 text-white"
        >
          <HiTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItems;

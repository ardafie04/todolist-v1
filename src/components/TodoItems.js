/* eslint-disable react/prop-types */
import { HiTrash, HiPencilAlt, HiCheck } from "react-icons/hi";

const TodoItems = ({ todo, index, setEdit, toggleComplete, removeTodo }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow-md mb-3">
      <span
        className={`${
          todo.completed ? "completed text-lg line-through" : "text-lg"
        }`}
      >
        {todo.todo}
      </span>
      <div>
        {!todo.completed && (
          <button
            onClick={() => toggleComplete(todo.id)}
            className="mr-2 btn bg-green-500 text-white"
          >
            <HiCheck />
          </button>
        )}

        {!todo.completed && (
          <button
            onClick={() => setEdit(index)}
            className="mr-2 btn bg-yellow-500 text-white"
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

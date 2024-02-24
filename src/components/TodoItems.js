/* eslint-disable react/prop-types */
import { HiTrash, HiPencilAlt } from "react-icons/hi";

const TodoItems = ({ todo, index, setEdit, removeTodo }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow-md mb-3">
      <span className="text-lg">{todo.todo}</span>
      <div>
        <button
          onClick={() => setEdit(index)}
          className="mr-2 btn bg-yellow-500 text-white"
        >
          <HiPencilAlt />
        </button>
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

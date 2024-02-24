import React from "react";
import { HiPencilAlt, HiOutlinePlus } from "react-icons/hi";

const TodoForm = ({ input, setInput, editIndex, addTodo, updateTodo }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full mr-2 bg-white "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={editIndex === -1 ? addTodo : updateTodo}
        className="btn bg-blue-500 text-white"
      >
        {editIndex === -1 ? <HiOutlinePlus /> : <HiPencilAlt />}
      </button>
    </div>
  );
};

export default TodoForm;

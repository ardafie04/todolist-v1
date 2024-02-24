/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems";

const TodoList = ({ todos, setEdit, removeTodo }) => {
  return (
    <div className="bg-gray-100 rounded shadow-md w-full mb-2 max-w-lg p-6">
      <ul>
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            index={index}
            todo={todo}
            setEdit={setEdit}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

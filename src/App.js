import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    try {
      if (input.trim() !== "") {
        setTodos([...todos, { id: new Date(), completed: false, todo: input }]);
        setInput("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const setEdit = (index) => {
    setInput(todos[index].todo);
    setEditIndex(index);
  };

  const updateTodo = () => {
    try {
      if (input.trim() !== "") {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].todo = input;
        setTodos(updatedTodos);
        setEditIndex(-1);
        setInput("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-4">
      <div className="bg-gray-100 rounded shadow-md w-full max-w-xl p-6">
        <div className="text-center font-bold text-2xl mb-4">Todo List App</div>
        <TodoForm
          input={input}
          setInput={setInput}
          editIndex={editIndex}
          addTodo={addTodo}
          updateTodo={updateTodo}
        />
      </div>

      {todos.length > 0 && (
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          setEdit={setEdit}
          removeTodo={removeTodo}
        />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import uniqid from "uniqid";
import Todo from "./Todo";

const Todobox = (props) => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos];

    newTodos.push({
      id: uniqid(),
      completed: false,
      text: value,
    });
    setTodos(newTodos);
    setValue("");
  };

  return (
    <div className="w-[80%] h-[90vh] bg-[#22577E] flex flex-col  text-[#FAFFAF] p-2 space-y-4 items-center shadow-2xl rounded-xl mx-auto">
      <h1 className="font-semibold text-3xl md:text-5xl p-2">ToDos List</h1>
      <>
        <form className="w-[80%] flex space-x-2 " onSubmit={handleTodo}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="bg-[#5584AC] shadow-2xl font-semibold  outline-none text-[1.1em] rounded-md indent-4 flex-grow "
          />
          <button className="bg-[#FAFFAF] text-[#22577E] font-semibold  p-2 rounded-lg active:bg-yellow-400">
            ADD
          </button>
        </form>
      </>
      <div className="w-[80%] min-h-[80%] border-[1px] rounded-[10px] border-gray-400 flex flex-col items-start px-4 space-y-5">
        {todos.map(({ id, text, completed }) => {
          return (
            <Todo
              key={id}
              text={text}
              completed={completed}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Todobox;

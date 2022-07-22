import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";

const Todo = ({ id, text, completed, todos, setTodos }) => {
  const [editMode, setEditMode] = useState(false);
  const [editVal, setEditVal] = useState(text);

  const handleDlt = (e) => {
    e.preventDefault();
    let newTodos = [...todos];
    newTodos = newTodos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    const index = newTodos.findIndex((el) => el.id === id);
    newTodos[index] = {
      ...newTodos[index],
      text: editVal,
    };
    setTodos(newTodos);
    setEditMode(false);
  };
  const handleCheckBoxToggle = (e) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((el) => el.id === id);
    newTodos[index] = {
      ...newTodos[index],
      completed: e.currentTarget.checked,
    };
    setTodos(newTodos);
    setEditMode(false);
  };

  return (
    <div className="flex justify-between w-[100%] text-[1em] space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckBoxToggle}
        />
        {editMode ? (
          <form onSubmit={handleEdit}>
            {" "}
            <input
              className="text-[1em] bg-gray-800 outline-none"
              value={editVal}
              onChange={(e) => setEditVal(e.target.value)}
            />
          </form>
        ) : (
          <div className="text-[1.2em] ">{text}</div>
        )}
      </div>
      <div className="flex space-x-1">
        <AiFillEdit
          className=" mx-2 hover:cursor-pointer transition-all hover:opacity-80"
          onClick={(e) => setEditMode(true)}
          size={20}
        />
        <AiFillDelete
          className=" mx-2 hover:cursor-pointer transition-all hover:opacity-80"
          onClick={handleDlt}
          size={20}
        />
      </div>
    </div>
  );
};

export default Todo;

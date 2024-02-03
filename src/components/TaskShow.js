// TaskShow.js
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import TaskEdit from "./TaskEdit";

export function TaskShow({ todo, onRemove, onUpdate, index }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let content = <p className="font-semibold ml-4">{todo}</p>;

  if (showEdit) {
    content = <TaskEdit todo={todo} onEdit={handleEditClick}  onUpdate={(newTask) => onUpdate(newTask, index)} />;
  }

  return (
    <div className="mb-6 border-2 p-3 rounded text-white">
      <div className="flex justify-between">
        {content}
        <div className="">
          <button className="mr-4 border-2 rounded p-1" onClick={handleEditClick}>
            <MdEdit size="23" />
          </button>
          <button className="border-2 rounded p-1" onClick={() => onRemove(index)}>
            <MdDelete size="23" />
          </button>
        </div>
      </div>
    </div>
  );
}

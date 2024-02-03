import { useState } from "react";

function TaskEdit ({todo, onUpdate, onEdit}) {

    const [newTask, setNewTask] = useState(todo)

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(newTask)
        console.log(newTask)
        onEdit()

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input className='text-black' name="newTask" value={newTask} onChange={handleChange} />
            </form>
            
        </div>
        )
}

export default TaskEdit;
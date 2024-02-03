import { useState} from "react"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



export function Item({todo, onRemove}) {


    const [showEdit, setShowEdit] = useState(false)

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    return (
        <div className="mb-6 border-2 p-3 rounded text-white">
            <div className='flex justify-between'>
                <p className='font-semibold ml-4'>{todo}</p>
            <div className=''>
                <button className='mr-4'><MdEdit  size='23'/></button>
                <button onClick={onRemove}><MdDelete size='23'/></button>
            </div>
            </div>
        </div>
        )
}
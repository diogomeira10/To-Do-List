function TaskCreate ({value,onChange,onSubmit}) {
    

    return (
        <div className='text-center'>
            <form className="" onSubmit={onSubmit}>
             <input className='w-2/4 mt-10 mb-14 mr-3 rounded p-2' onChange={onChange} value={value} type="text" placeholder="Add to do item"/>
             <button className='border-2 text-white font-semibold rounded p-2'>Add Task</button>
             </form>
   
        </div>
        
    )

}


export default TaskCreate
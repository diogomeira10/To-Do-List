import {useState} from 'react';
import { TaskShow } from './components/TaskShow';
import AddInput from './components/TaskCreate';

function App() {

  const [value, setValue] = useState('')
  const [list,setList] = useState([])

  const renderedList = list.map((element, index) => (
    <TaskShow
      key={index}
      todo={element}
      onUpdate={(newTask) => handleUpdateTask(newTask, index)}
      onRemove={(i) => handleRemoveClick(i)}
      index={index}
    />
  ));

  const handleUpdateTask = (newTask,index) => {
    const updatedList = list.map((task,i) => {
      if(index === i) {
        return newTask
      } 
      return task
    })
    setList(updatedList)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(value !== "" ) {
      setList([...list,value])
    }
     setValue('')
  }

  const handleRemoveClick = (i) => {
    const removedItemList = list.filter((element,id) => id !== i )
    setList(removedItemList)

  }



  return (
    <div className="flex flex-col ml-56 mr-56 mt-20" >
      <div className='text-center'>
        <h1 className='font-medium text-6xl text-gray-50 mb-10'>To do List</h1>
      </div>
      <div>
        <AddInput value={value} onSubmit={handleSubmit} onChange={handleChange}/>
      </div>
      {renderedList}
    </div>
  );
}

export default App;

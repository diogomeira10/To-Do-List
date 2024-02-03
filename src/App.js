import './App.css';
import {useState} from 'react';
import { Item } from './components/Item';
import AddInput from './components/TaskCreate';

function App() {

  const [value, setValue] = useState('')
  const [list,setList] = useState([])

  const renderedList = list.map((element,index) => {
    return <Item onRemove={() => handleRemoveClick(index)} key={index} todo={element}/>
  })

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
        <h1 className='font-medium text-4xl text-gray-50'>To do List</h1>
      </div>
      <div>
        <AddInput value={value} onSubmit={handleSubmit} onChange={handleChange}/>
      </div>
      {renderedList}
    </div>
  );
}

export default App;

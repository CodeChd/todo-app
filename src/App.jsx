import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Form from '../components/Form'
import Header from '../components/Header'
import Todos from '../components/Todos'
import './App.css'



function App() {
  const [isTask, setIsTask] = useState([])

  const removeTask = (e) => {
    const newList = isTask.filter((item) => item.id !== e)
    setIsTask(newList)
  }


  return (
    <div className="App">
      <Toaster/>
     <Header/>
     <Form setIsTask={setIsTask}/>
     <Todos removeTask={removeTask} isTask={isTask}/>
      
    </div>
  )
}

export default App

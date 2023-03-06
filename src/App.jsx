import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Form from '../components/Form'
import Header from '../components/Header'
import Todos from '../components/Todos'
import supabase from '../helper/suppabase'
import './App.css'



function App() {
  const [isTask, setIsTask] = useState([])


  //local test
  // const removeTask = (e) => {
  //   const newList = isTask.filter((item) => item.id !== e)
  //   setIsTask(newList)
  // }


  const removeTask = async (id) =>{
    const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .select()
  }

  useEffect(()=> {
    const supabaseDB = async () =>{

      const {data: db, error} = await supabase
      .from("todos")
      .select("*")


      if(!error) setIsTask(db)
    }
    supabaseDB()
  },[isTask])

  const HandleFilter = () => {

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

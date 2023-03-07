import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Form from '../components/Form'
import Header from '../components/Header'
import Todos from '../components/Todos'
import supabase from '../helper/suppabase'
import './App.css'
import { CircleLoader } from 'react-spinners'


function App() {
  const [isTask, setIsTask] = useState([])
  const [loading, setIsLoading] = useState(false)


  //local test
  // const removeTask = (e) => {
  //   const newList = isTask.filter((item) => item.id !== e)
  //   setIsTask(newList)
  // }



  const removeTask = async (id) => {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .select()

    setIsTask(prev => prev.filter(ts => ts.id !== id))


  }

  useEffect(() => {
    const supabaseDB = async () => {
      setIsLoading(true)

      const { data: db, error } = await supabase
        .from("todos")
        .select("*")


      if (!error) setIsTask(db)
      setIsLoading(false)
    }
    supabaseDB()
  }, [])

  

  const HandleFilter = async (e) => {
    const selectOptions = e.target.value
    setIsLoading(true)

    let q = supabase.from('todos').select()

    if (selectOptions !== "all") {
      q.eq("complete", "true")
    }

    const { data: db, error } = await q
      .select()

    if (!error) setIsTask(db)
    setIsLoading(false)
   }



  // console.log(isTask.map(e => e.complete))


  return (
    <div className="App">
      <Toaster /> 
      <Header />
      <Form setIsTask={setIsTask} HandleFilter={HandleFilter} />
      {loading ?

        <CircleLoader color='#38dfcb' size={99} className='spinner' />
        :
        <Todos removeTask={removeTask} isTask={isTask} setIsTask={setIsTask} />

      }

    </div>
  )
}

export default App

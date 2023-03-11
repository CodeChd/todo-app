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

  // const [isChange, setIsChange] = useState(false)
  // const [isUpdating, setUpdating] = useState(false)




  //local test
  // const removeTask = (e) => {
  //   const newList = isTask.filter((item) => item.id !== e)
  //   setIsTask(newList)
  // }


  // fetch
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


//     // Update
// async function handleUpdate(e) {
//   setUpdating(true)

//   const res =isTask.map(e =>  (e.id))

//   const { data: updatedTask, error } = await supabase
//     .from('todos')
//     .update({ complete: !isChange })
//     .eq("id", res)
//     .select()

//   setUpdating(false)

//   if (!error) setIsTask((is) => is.map(e => e.id === isTask.id ? updatedTask[0] : e))

//   setIsChange(!isChange)
// }


// delete
  const removeTask = async (id) => {
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .select()

    setIsTask(prev => prev.filter(ts => ts.id !== id))


  }


  
// filter
  const HandleFilter = async (e) => {
    const selectOptions = e.target.value
    setIsLoading(true)

    let q = supabase.from('todos').select("*")

    if (selectOptions !== "all") {
      q.eq("complete", selectOptions)
    }

    const { data: db, error } = await q
      .select()

    if (!error) setIsTask(db)
    setIsLoading(false)
   }


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

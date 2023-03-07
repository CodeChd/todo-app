import { useRef, useState } from "react"
import { FaCheck, FaTrash } from 'react-icons/fa'
import supabase from "../helper/suppabase"


export default function Tasks({ isTask, setIsTask, removeTask }) {
  const [isChange, setIsChange] = useState(false)
  const [isUpdating, setUpdating] = useState(false)

  // Update


  async function handleUpdate(e) {
    setUpdating(true)


    const { data: updatedTask, error } = await supabase
      .from('todos')
      .update({ complete: !isChange })
      .eq("id", isTask.id)
      .select()

    setUpdating(false)

    if (!error) setIsTask((is) => is.map(e => e.id === isTask.id ? updatedTask[0] : e))

    setIsChange(!isChange)

  }

  console.log(isTask.complete)

  return (
    <li key={isTask.id} className="task-list">

      <p className={`${isTask.complete ? "task-done" : null} task`}>{isTask.tasks}</p>
      <button className='btn btn-complete' onClick={handleUpdate}><FaCheck size={20} color="white" /></button>
      <button className='btn btn-delete' onClick={() => removeTask(isTask.id)}><FaTrash size={20} color="white" /></button>

    </li>
  )
}


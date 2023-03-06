import { useState } from "react"
import {  FaCheck, FaTrash} from 'react-icons/fa'

export default function Tasks({isTask, removeTask}) {
  const [isComplete, setIsComplete] = useState(false)


  return (
    <li key={isTask.id} className='task-list' data-filter={isComplete ? "true" : "false"}>
      
      <p className={`${isComplete ? "task-done": null} task`}>{isTask.tasks}</p>
      <button className='btn btn-complete' onClick={() => setIsComplete(!isComplete) }><FaCheck size={20} color="white"/></button>
      <button className='btn btn-delete' onClick={() => removeTask(isTask.id)}><FaTrash size={20} color="white"/></button>
      
   
    </li>
  )
}


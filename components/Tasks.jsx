import { useState } from "react"



export default function Tasks({isTask, removeTask}) {
  const [isComplete, setIsComplete] = useState(false)
   
  return (
    <li key={isTask.id} className='task-list'>
      
      <p className={`${isComplete ? "task-done": null} task`}>{isTask.task}</p>
      <button className='btn btn-complete' onClick={() => setIsComplete(!isComplete) }>{isTask.complete}</button>
      <button className='btn btn-delete' onClick={() => removeTask(isTask.id)}>{isTask.delete}</button>
      
   
    </li>
  )
}

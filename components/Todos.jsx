import Tasks from "./Tasks"

export default function todos({ isTask,setIsTask, removeTask}) {

  if(isTask.length === 0){
    return (
      <p className="no-task">No task here yet! Add your own</p>
    )
  }


  return (
    <main>
      <ul>
        {isTask.map((e) => (
     <Tasks key={e.id} isTask={e} removeTask={removeTask} setIsTask={setIsTask}/>
        ))
        }

      </ul>
    </main>
  )
}

import Tasks from "./Tasks"

export default function todos({ isTask,setIsTask, removeTask}) {


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

import Tasks from "./Tasks"




export default function todos({isTask, removeTask}) {
  return (
    <main>
        <ul>
          {isTask.map((e) => (

            <Tasks key={e.id} isTask={e} removeTask={removeTask}/>
          ))

          }
        </ul>
    </main>
  )
}

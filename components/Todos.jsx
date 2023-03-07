import Tasks from "./Tasks"

export default function todos({ isTask, removeTask, setIsTask }) {

const res = isTask.map((e) => e.complete === "true")

console.log(res)

  if (!res){

    return (
      <p className='message spinner'>
        There are no facts in the databases for this category! Add your own
      </p>
    )
  }

  return (
    <main>
      <ul>
        {isTask.map((e) => (



          <Tasks key={e.id} isTask={e} removeTask={removeTask} setIsTask={setIsTask} />


        ))
        }

      </ul>
    </main>
  )
}

import { useState } from "react"
import { toast } from "react-hot-toast"


export default function Form({ setIsTask }) {
    const [isVal, setIsVal] = useState()

    const onSubmit = (e) => {
        e.preventDefault()

        
        if(!isVal){
            toast.error("Please input task")
            return
        }
        
        const data ={
            id: Math.round(Math.random() * 33),
            task: isVal,
            complete: "Complete",
            delete: "Delete"
        }

        setIsTask((prev) => [...prev, data])
        toast.success("Nice 👌")
        setIsVal("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-task">
                <input type="text" value={isVal} onChange={(e) => setIsVal(e.target.value)} />
                <button className="btn-header">+</button>
            </div>
            <select className="options">
                <option value="All">All</option>
                <option value="Complete">Complete</option>
                <option value="Current">Current</option>
            </select>
        </form>
    )
}

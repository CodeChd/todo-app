import { useState } from "react"
import { toast } from "react-hot-toast"
import {FaPlus} from 'react-icons/fa'
import supabase from "../helper/suppabase"



export default function Form({ setIsTask, HandleFilter }) {
    const [isVal, setIsVal] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()

        
        if(!isVal){
            toast.error("Please input task")
            return
        }

        const { data: tasks, error } = await supabase
        .from('todos')
        .insert({tasks : isVal})
        .select()

        setIsTask((prev) => [...prev, tasks[0]])
        toast.success("Success 👌")
        setIsVal("")
    }
    return (
        <form onSubmit={onSubmit} >
            <div className="input-task">
                <input type="text" value={isVal} onChange={(e) => setIsVal(e.target.value)}/>
                <button className="btn-header"><FaPlus size={20}/></button>
            </div>
            <select className="options" onChange={HandleFilter}>
                <option value="all">All</option>
                <option value="true">Complete</option>
                <option value="false">Uncomplete</option>
            </select>
        </form>
    )
}

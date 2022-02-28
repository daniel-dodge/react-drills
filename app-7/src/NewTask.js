import React, {useState} from "react"

const NewTask = (props) => {
    let [input, changeInput] = useState('')
const handleAdd=()=>{
    props.add(input)
    changeInput("")
}
return(
    <div>
    <input value={input} placeholder="Enter new task" onChange={e => {changeInput(e.target.value)}}></input>
    <button onClick={handleAdd}>Add</button>
    </div>
)

}
export default NewTask
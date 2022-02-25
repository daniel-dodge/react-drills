import React, {useState} from 'react'
const Login = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const handleLogin = ()=>{
        alert(`Username:${username} Password:${pass}`)
    }
return(
    <div>
    <input onChange={(event)=>{setUsername(event.target.value)}}></input>
    <input onChange={(event)=>{setPass(event.target.value)}}></input>
    <button onClick={(handleLogin)}>Submit</button>
    </div>
)
}

export default Login
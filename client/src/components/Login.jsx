import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUsers}){
    // const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        fetch('/api/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data => {setUsers(data)
        navigate('/home')})

    }

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={username} placeholder="Username" onChange={handleUsername} />
                <br></br>
                <input type='text' value={password} placeholder="Password" onChange={handlePassword}/>
                <br></br>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
import { useState, useEffect } from 'react'

function Login(){
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch('/api/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data => setUser(data))
    }

    function handleLogout(e){
        e.preventDefault()
        fetch('/api/logout', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(setUser(null))
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    if(user){
        return(
            <div>
                <form onSubmit={handleLogout}>
                    <button type='submit'>Logout</button>
                </form>
            </div>
        )
    }
    else{
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
}

export default Login
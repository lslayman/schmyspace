import { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignUp({updateUser}){

    const [signup, setSignup] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        fetch('/api/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password, email: email})
        })
        .then(res => res.json())
        .then(data => {updateUser(data)
        navigate('/home')})
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }
    if(signup){
        return(
            <div>
                <h1>User already exists</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} placeholder="Username" onChange={handleUsername}/>
                    <br></br>
                    <input type="text" value={email} placeholder="Email" onChange={handleEmail}/>
                    <br></br>
                    <input type="text" value={password} placeholder="Password" onChange={handlePassword}/>
                    <br></br>
                    <button type="submit">Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUp
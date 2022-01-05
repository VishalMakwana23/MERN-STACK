import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const user = {
        username : "",
        password : ""
    }

    const loginUser = () => {
        axios.post("/api/login",user)
        .then(res => {
            alert(res.data.data)
            setLoginUser(res.data.user)
            navigate('/')
        })
    }

    return (
        <div>
            <h1>Login </h1>
            <input 
                type="text" placeholder="username" onChange={(e) => (user.username = e.target.value)}
            /><br/>
            <input 
                type="text" placeholder="password" onChange={(e) => (user.password = e.target.value)}
            /><br/>
            <button onClick={loginUser}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button><br/>
        </div>
    )
}

export default Login

import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {

    const navigate = useNavigate();

      
  const user = {
    name:"",
    username:"",
    email:"",
    password:"",
    phone:0
  }

  const registerUser = () => {
    axios.post("/api/register",user).then((res) => console.log(res.data))
  }
  

    return (
        <div className='App'>
            <input 
                type="text" placeholder="name" onChange={(e) => (user.name = e.target.value)}
            /><br/>
            <input 
                type="text" placeholder="username" onChange={(e) => (user.username = e.target.value)}
            /><br/>
            <input 
                type="text" placeholder="email" onChange={(e) => (user.email = e.target.value)}
            /><br/>
            <input 
                type="text" placeholder="password" onChange={(e) => (user.password = e.target.value)}
            /><br/>
            <input 
                type="text" placeholder="phone" onChange={(e) => (user.phone = Number(e.target.value))}
            /><br/>


                <button onClick={registerUser}>Register</button><br/>
                <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Register

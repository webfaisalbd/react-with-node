import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/employee/login', { email, password})
        .then(result=> {
            console.log(result.data);
            if(result.data == "Success"){
                navigate('/')
            }
        })
        .then(err=> console.log(err))
    }

  return (
    <>
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>Login</button>
            </form>
            <p>New User ?</p>
            <Link to='/register'><button>Sign Up</button></Link>
        </div>
    </>
  )
}

export default Login
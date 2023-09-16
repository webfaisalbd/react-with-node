import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/employee/register', {name, email, password})
        .then(result=> {
            console.log(result.data);
            navigate('/')
        })
        .then(err=> console.log(err))
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="texgt" name="name" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>Register</button>
            </form>
            <p>Already have an account</p>
            <Link to='/login'><button>Login</button></Link>
        </div>
    )
}

export default SignUp
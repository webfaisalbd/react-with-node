import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4000/api/users', {name, email})
        .then(res => console.log(res))
        .then(err => console.log(err))
    }

    return (
        <div>
            <Link to='/'><button>Back to Home</button></Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button>Add User</button>
                </div>
            </form>
        </div>
    )
}

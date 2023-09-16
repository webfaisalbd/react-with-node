import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/users/' + id)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setEmail(res.data.email);
            })
            .catch(err => console.log(err))
    }, [])


    const UpdateData = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:4000/api/users/' + id, { name, email })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div>
                <Link to='/'><button>Back to Home</button></Link>
                <form onSubmit={UpdateData}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter Your Name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Your Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <button>Update User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
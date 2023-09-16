import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:4000/api/users')
        .then(result => setUsers(result.data))
        .catch(error => console.log(error))
    },[])

    const handleClick = (id) => {
        axios.delete('http://localhost:4000/api/users/'+id)
        .then(res=> {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/createUser"><button>Add User</button></Link>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(users) && users.map(user => {
                            return <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/updateUser/${user._id}`}><button>Edit</button></Link>
                                <button onClick={()=> handleClick(user._id)}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User
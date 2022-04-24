import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div className="App">
        <h1>My own Data: {users.length} </h1>
        <ul>
          {
            users.map(user => <li key={user.id}> Id: {user.id} Name: {user.name} </li> )
          }
        </ul>
    </div>
  );
}

export default App;

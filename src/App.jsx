import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUser } from './CreateUser'
import './App.css'
import User from './User'
import UpdateUser from './UpdateUser'
import SignUp from './SignUp'
import Login from './Login'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path='/createUser' element={<CreateUser />}></Route>
          <Route path='/updateUser/:id' element={<UpdateUser />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

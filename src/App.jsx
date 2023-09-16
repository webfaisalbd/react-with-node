import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateUser } from './CreateUser'
import './App.css'
import User from './User'

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path='/createUser' element={<CreateUser />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

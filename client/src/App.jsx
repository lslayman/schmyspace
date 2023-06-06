import { useState } from 'react'
import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Profile from './components/Profile'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Messages from './components/Messages'
import Login from './components/Login'

function App() {

  const [page, setPage] = useState('/')

  return (
    <div>
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route exact="true" path="/" element={<HomePage/>}/>
        <Route path='/users' element={<Profile/>}/>
        <Route path='/messages' element={<Messages />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
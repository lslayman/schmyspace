import { useState } from 'react'
import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import Profile from './components/Profile'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Messages from './components/Messages'
import Login from './components/Login'
import Browse from './components/Browse'
import Search from './components/Search'
import Blog from './components/Blog'

function App() {

  const [page, setPage] = useState('/')

  return (
    <div className='body'>
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
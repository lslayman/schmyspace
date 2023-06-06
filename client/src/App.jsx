import { useState } from 'react'
import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

function App() {
  const [page, setPage] = useState('/')

  return (
    <div>
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route exact="true" path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
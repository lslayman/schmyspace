import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('/')

  return (
    <div>
      <NavBar onChangePage={setPage}/>
    </div>
  )
}

export default App
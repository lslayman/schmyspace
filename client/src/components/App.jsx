import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [page, setPage] = useState('/')

  return(
    <div>
      <NavBar onChangePage={setPage}/>
    </div>
  )
}

export default App;

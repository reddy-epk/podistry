import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Creater from './components/Dummy/creater'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/creater/*" element={<Creater />} />
    </Routes>
  )
}

export default App

/*
import Creater from './components/Dummy/creater'
const App = () => {
  return <Creater />
}

export default App
*/

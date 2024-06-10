import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectFlowLayout from './components/ProjectFlowLayout'
import RouteProject from './components/RouteProject'
import Settings from './components/Settings'
import WidgetConfig from './components/WidgetConfig'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/project-flow' element={<ProjectFlowLayout />} />
      <Route path='/project' element={<RouteProject />} />
      <Route path='/widget-configuration' element={<WidgetConfig />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default App

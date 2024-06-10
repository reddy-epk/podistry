import React from 'react'
import {IoSettingsOutline} from 'react-icons/io5'
import {Link, Route, Routes} from 'react-router-dom'
import RouteProject from '../RouteProject'
import WidgetConfiguration from '../WidgetConfig'
import Settings from '../Settings'
import './index.css'

const ProjectFlowLayout = () => {
  return (
    <div className='project-flow-layout'>
      <div className='sidebar'>
        <div className='lama-svg'>
          <img
            src='https://res.cloudinary.com/dqfqwre2q/image/upload/v1717913919/lama.svg'
            alt='lama'
            width='80'
            height='40'
          />
          <h1 className='lama-head'>LAMA.</h1>
        </div>
        <p id='flow-para'>Podcast Update Flow</p>
        <div className='sidebar-top'>
          <Link to='/project' className='circle-button'>
            <span className='circle'>1</span>
            Project
          </Link>
          <Link to='/widget-configuration' className='circle-button'>
            <span className='circle'>2</span>
            Widget Configuration
          </Link>
          <button className='circle-button'>
            <span className='circle'>3</span>
            Deployment
          </button>
          <button className='circle-button'>
            <span className='circle'>4</span>
            Pricing
          </button>
          <hr />
        </div>
        <hr />
        <Link to='/settings' className='circle-button setting-button'>
          <span className='setting'>
            <IoSettingsOutline />
          </span>
          <span className='spacer'>Settings</span>
        </Link>
      </div>
      <div className='main-bar'>
        <Routes>
          <Route path='/project' element={<RouteProject />} />
          <Route
            path='/widget-configuration'
            element={<WidgetConfiguration />}
          />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProjectFlowLayout

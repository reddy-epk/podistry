import React from 'react'
import {Link} from 'react-router-dom'
import {IoSettingsOutline} from 'react-icons/io5'
import './index.css'

const Sidebar = ({selectedOption, handleOptionClick}) => {
  return (
    <div className="sidebar">
      <div className="lama-svg">
        <img
          src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1717913919/lama.svg"
          alt="lama"
          width="80"
          height="40"
        />
        <h1 className="lama-head">LAMA.</h1>
      </div>
      <p>Podcast Update Flow</p>
      <div className="sidebar-top">
        <Link
          to="/project"
          className={`circle-button ${
            selectedOption === 'projects' ? 'active' : ''
          }`}
          onClick={() => handleOptionClick('projects')}
        >
          <span className="circle">1</span> Project
        </Link>
        <Link
          to="/widget-configuration"
          className={`circle-button ${
            selectedOption === 'widget-configuration' ? 'active' : ''
          }`}
          onClick={() => handleOptionClick('widget-configuration')}
        >
          <span className="circle">2</span> Widget Configuration
        </Link>
        <button className="circle-button">
          <span className="circle">3</span> Deployment
        </button>
        <button className="circle-button">
          <span className="circle">4</span> Pricing
        </button>
        <hr />
      </div>
      <hr />
      <button
        className={`circle-button ${
          selectedOption === 'pricing' ? 'active' : ''
        }`}
        onClick={() => handleOptionClick('settings')}
      >
        <Link to="/settings" className="circle-button setting-button">
          <IoSettingsOutline />
          <span className="spacer">Settings</span>
        </Link>
      </button>
    </div>
  )
}

export default Sidebar

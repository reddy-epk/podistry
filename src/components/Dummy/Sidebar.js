import React from 'react'
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
      <p id="p-flow">Podcast Update Flow</p>
      <div className="sidebar-top">
        <button
          className={`circle-button ${
            selectedOption === 'projects' ? 'active' : ''
          }`}
          onClick={() => handleOptionClick('projects')}
        >
          <span className="circle">1</span> Project
        </button>
        <button
          className={`circle-button ${
            selectedOption === 'widget-configuration' ? 'active' : ''
          }`}
          onClick={() => handleOptionClick('widget-configuration')}
        >
          <span className="circle">2</span> Widget Configuration
        </button>
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
        className={`spacer-button ${
          selectedOption === 'settings' ? 'active' : ''
        }`}
        onClick={() => handleOptionClick('settings')}
      >
        <div className="circle-button setting-button">
          <IoSettingsOutline id="on-setHover" />
          <span>Settings</span>
        </div>
      </button>
    </div>
  )
}

export default Sidebar

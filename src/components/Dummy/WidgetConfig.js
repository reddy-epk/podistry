import React, {useState} from 'react'
import {Component} from 'react'

import Desplay from './Desplay.js'
import {IoHomeOutline} from 'react-icons/io5'
import {MdArrowDropDown} from 'react-icons/md'
import {FaRegBell} from 'react-icons/fa'

import './widget.css'

class General extends Component {
  render() {
    return (
      <div id="navy-bar">
        <div id="routed-icon">
          <IoHomeOutline className="home-folder" />
          <p className="slashy">/</p>
          <p className="sam-text">Sample Upload</p>
          <p className="slashy">/</p>
          <p className="sam-text samext"> WidgetConfig</p>
        </div>
        <div id="country-icons">
          <div className="rowy">
            <MdArrowDropDown className="dropden" />
            <p>EN</p>
          </div>
          <img
            src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718010270/Ellipse_2_nqupo2.png"
            width="30"
            height="30"
            alt="country"
          />
          <FaRegBell className="fabel" />
        </div>
      </div>
    )
  }
}

class FirstRender extends Component {
  render() {
    return (
      <div className="first-container-cols">
        <label htmlFor="one" className="twoIn">
          One:
        </label>
        <input type="text" id="one" className="oneIn" />
        <br />
        <label htmlFor="two" className="twoIn">
          Two:
        </label>
        <input type="text" id="two" className="oneIn" />
        <br />
        <label htmlFor="three" className="twoIn">
          Three:
        </label>
        <input type="text" id="three" className="oneIn" />
      </div>
    )
  }
}

const WidgetConfig = () => {
  const [activeTab, setActiveTab] = useState('general')

  const handleTabClick = tabName => {
    setActiveTab(tabName)
  }

  return (
    <div className="matryfy">
      <General />
      <div>
        <button
          type="button"
          className="button"
          onClick={() => handleTabClick('general')}
          style={{
            textDecoration: activeTab === 'general' ? 'none' : 'none',
          }}
        >
          General
        </button>
        <button
          type="button"
          className="button"
          onClick={() => handleTabClick('display')}
          style={{
            textDecoration: activeTab === 'display' ? 'none' : 'none',
          }}
        >
          Display
        </button>
        <button
          type="button"
          className="button"
          onClick={() => handleTabClick('advanced')}
          style={{
            textDecoration: activeTab === 'advanced' ? 'none' : 'none',
          }}
        >
          Advanced
        </button>
      </div>
      <div className="heroku"></div>
      <div>
        {activeTab === 'general' && <FirstRender />}
        {activeTab === 'display' && <Desplay />}
        {activeTab === 'advanced' && <h2>Advanced Content</h2>}
      </div>
    </div>
  )
}

export default WidgetConfig

import React from 'react'
import {IoHomeOutline} from 'react-icons/io5'
import {MdArrowDropDown} from 'react-icons/md'
import {FaRegBell} from 'react-icons/fa'
import './Settings.css'

const Settings = () => {
  return (
    <div>
      <div>
        <div id="nav-bary">
          <div id="route-iconsly">
            <IoHomeOutline className="home-iconey" />
            <p className="slashbary">/</p>
            <p className="sample-texter">Sample Upload</p>
            <p className="slashbary">/</p>
            <p className="sampty">Settings</p>
          </div>
          <div id="countri-icons">
            <div className="rowys">
              <MdArrowDropDown className="dropdownin" />
              <p>EN</p>
            </div>
            <img
              src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718010270/Ellipse_2_nqupo2.png"
              width="30"
              height="30"
              alt="country"
            />
            <FaRegBell className="fabelling" />
          </div>
        </div>
      </div>
      <div className="mage-container">
        <div className="image-container">
          <div className="header">
            <h2 className="contentify">Account Settings</h2>
          </div>
          <div className="content">
            <img
              src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718172272/Gemini_Generated_Image_u095msu095msu095_iouy6w.jpg"
              alt="poscast"
              height="100"
              width="100"
              class="rounded-image"
            />
            <div className="user-info">
              <label for="pkr">User Name: </label>
              <input type="text" id="pkr" placeholder="reddyepk" />
            </div>
            <div className="user-info">
              <label for="pk">Email:</label>
              <input type="text" id="pk" placeholder="reddyepk@gmail.com" />
            </div>
          </div>
          <div className="subscription">
            <p>You are currently on the Pk-Podcast Al Basic Plan!</p>
            <button id="oklama">Upgrade</button>
          </div>
          <p className="pronty">Cancel Subscription</p>
        </div>
      </div>
    </div>
  )
}

export default Settings

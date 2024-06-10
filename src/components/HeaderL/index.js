import React from 'react'
import {IoHomeOutline, IoSettingsOutline} from 'react-icons/io5'
import {FaRegBell} from 'react-icons/fa'
import './index.css'

const Header = () => {
  return (
    <div>
      <div className='lama-svg'>
        <img
          src='https://res.cloudinary.com/dqfqwre2q/image/upload/v1717913919/lama.svg'
          alt='lama'
          width='100'
          height='50'
        />
        <h1 className='lama-head'>LAMA.</h1>
      </div>

      <header className='header'>
        <div className='header-left'>
          <button className='home-button'>
            <IoHomeOutline className='home-icon' />
            <span className='bach-to'>Back to Home</span>
          </button>
        </div>
        <div id='header-right'>
          <IoSettingsOutline className='settings-icon' />
          <FaRegBell className='bell-icon' />
        </div>
      </header>
    </div>
  )
}

export default Header

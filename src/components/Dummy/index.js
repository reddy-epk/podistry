import React from 'react'
import Sidebar from './new'
import {IoHomeOutline} from 'react-icons/io5'
import {MdArrowDropDown} from 'react-icons/md'
import {FaRegBell} from 'react-icons/fa'
import './index.css'

const HeaderRoutes = () => (
  <div id="nav-bar">
    <div id="route-icons">
      <IoHomeOutline className="home-icone" />
      <p className="slashbar">/</p>
      <p className="sample-text">Sample Upload</p>
      <p className="slashbar">/</p>
      <p className="sample-text">Upload</p>
    </div>
    <div id="country-icons">
      <div className="rowy">
        <MdArrowDropDown className="dropdown" />
        <p>EN</p>
      </div>
      <img
        src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718010270/Ellipse_2_nqupo2.png"
        width="30"
        height="30"
      />
      <FaRegBell className="fabell" />
    </div>
  </div>
)

const MainContent = () => {
  return (
    <div className="">
      <Sidebar />
      <div>
        <div className="main-content">
          {HeaderRoutes()}
          <h1 className="upload-text">Upload</h1>
          <div className="divide-banner">
            <div className="cards-container">
              <div className="projects-list-container">
                <img
                  src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012602/Frame_1_cq8c21.png "
                  className="youtube-logo"
                  width="70"
                  height="70"
                />
                <div className="card-title">
                  <h3>
                    Upload <br />
                    Youtube Video
                  </h3>
                </div>
              </div>
              <div className="projects-list-container">
                <img
                  src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012603/Frame_2_wemnal.png "
                  className="youtube-logo"
                  width="70"
                  height="70"
                />
                <div className="card-title">
                  <h3>
                    Upload <br />
                    Spotify Podcast
                  </h3>
                </div>
              </div>
              <div className="projects-list-container">
                <img
                  src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012611/image_2_newk5e.png "
                  className="youtube-logo"
                  width="70"
                  height="70"
                />
                <div className="card-title">
                  <h3>
                    Upload from <br /> Rss Feed
                  </h3>
                </div>
              </div>
            </div>
            <div className="marginer"></div>
            <div className="lower-banner">
              <div>
                <img
                  src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718014009/cloud_upload_fcznzr.png"
                  width="70"
                  height="70"
                />
                <p>
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text):
                  <br />
                  MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
                </p>
                <button className="save-button">Select File</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent

import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import {IoHomeOutline} from 'react-icons/io5'
import {MdArrowDropDown} from 'react-icons/md'
import {FaRegBell} from 'react-icons/fa'
import './index.css'

const customStyles = {
  content: {
    height: '59%',
    width: '82%',
    padding: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px dashed #7e22ce',
    overflowY: 'hidden',
  },
}

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
        alt="country"
      />
      <FaRegBell className="fabell" />
    </div>
  </div>
)

const RouteProject = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [podcastName, setPodcastName] = useState('')
  const [podcastDetails, setPodcastDetails] = useState('')
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const storedPodcasts = JSON.parse(localStorage.getItem('podcasts')) || []
    setPodcasts(storedPodcasts)
  }, [])

  const handleProjectClick = () => {
    setShowPopup(true)
  }

  const handlePodcastNameChange = e => {
    setPodcastName(e.target.value)
  }

  const handlePodcastDetailsChange = e => {
    setPodcastDetails(e.target.value)
  }

  const handleSaveClick = () => {
    const newPodcast = {
      name: podcastName,
      details: podcastDetails,
      timestamp: new Date().toLocaleString(),
    }
    const existingPodcasts = [...podcasts]
    const index = existingPodcasts.findIndex(
      podcast => podcast.name === podcastName,
    )
    if (index !== -1) {
      existingPodcasts[index] = newPodcast
    } else {
      existingPodcasts.push(newPodcast)
    }
    localStorage.setItem('podcasts', JSON.stringify(existingPodcasts))
    setPodcasts(existingPodcasts)
    setShowPopup(false)
    setPodcastName('')
    setPodcastDetails('')
  }

  const closeModal = () => {
    setShowPopup(false)
    setPodcastName('')
    setPodcastDetails('')
  }

  const handleEditClick = index => {
    const selectedPodcast = podcasts[index]
    setPodcastName(selectedPodcast.name)
    setPodcastDetails(selectedPodcast.details)
    setShowPopup(true)
  }

  const handleDeleteClick = index => {
    const updatedPodcasts = [...podcasts]
    updatedPodcasts.splice(index, 1)
    localStorage.setItem('podcasts', JSON.stringify(updatedPodcasts))
    setPodcasts(updatedPodcasts)
  }

  return (
    <div>
      <div className="main-content">
        {HeaderRoutes()}
        <h1 className="upload-text">Upload</h1>
        <div className="divide-banner">
          <div className="cards-container">
            <div
              className="projects-list-container"
              onClick={handleProjectClick}
            >
              <img
                src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012602/Frame_1_cq8c21.png "
                className="youtube-logo"
                width="70"
                height="70"
                alt="ylogo"
              />
              <div className="card-title">
                <h3>
                  Upload <br />
                  Youtube Video
                </h3>
              </div>
            </div>
            <div
              className="projects-list-container"
              onClick={handleProjectClick}
            >
              <img
                src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012603/Frame_2_wemnal.png "
                className="youtube-logo"
                width="70"
                height="70"
                alt="spotify"
              />
              <div className="card-title">
                <h3>
                  Upload <br />
                  Spotify Podcast
                </h3>
              </div>
            </div>
            <div
              className="projects-list-container"
              onClick={handleProjectClick}
            >
              <img
                src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718012611/image_2_newk5e.png "
                className="youtube-logo"
                width="70"
                height="70"
                alt="RssFeed"
              />
              <div className="card-title">
                <h3>
                  Upload from <br /> Rss Feed
                </h3>
              </div>
            </div>
          </div>
          <div className="marginer">
            <p>or</p>
          </div>
          {podcasts.length === 0 ? (
            <div className="lower-banner">
              <div>
                <img
                  src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1718014009/cloud_upload_fcznzr.png"
                  width="70"
                  height="70"
                  alt="uploadfeed"
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
          ) : (
            <div className="if-content">
              <div className="list-header">
                <p className="intial-space">Name</p>
                <p>Upload Time & Date</p>
                <p className="status-space">Status</p>
                <p id="action-space">Actions</p>
              </div>
              {/*<hr className="hr-line" />*/}
              {podcasts.map((podcast, index) => (
                <div key={index} className="list-item">
                  <p className="intial-space">{podcast.name}</p>
                  <p>{podcast.timestamp}</p>
                  <p className="status-space">Done</p>
                  <div classN="edit-delete-buttons">
                    <button
                      className="edit-button"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                    <span class="divider"></span>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={showPopup}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Podcast Details"
      >
        <div className="lastify">
          <h2>Edit Transcript:</h2>
          <div className="save-cancel">
            <button onClick={closeModal} id="cancel">
              Cancel
            </button>
            <button onClick={handleSaveClick} id="save">
              Save & exit
            </button>
          </div>
        </div>
        <div className="modal-css">
          <label htmlFor="podcastName">Podcast Name:</label>
          <input
            type="text"
            id="podcastName"
            className="pod-reduce"
            value={podcastName}
            onChange={handlePodcastNameChange}
          />
          <label htmlFor="podcastDetails" className="cast-marginer">
            Podcast Details:
          </label>
          <textarea
            id="podcastDetails"
            value={podcastDetails}
            onChange={handlePodcastDetailsChange}
            rows="15"
          ></textarea>

          {/*<hr className="hr-line" />*/}
        </div>
      </Modal>
    </div>
  )
}

export default RouteProject

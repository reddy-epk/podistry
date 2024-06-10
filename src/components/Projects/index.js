import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FaPodcast} from 'react-icons/fa6'
import Header from '../HeaderL'
import './index.css'

const Projects = () => {
  const navigate = useNavigate()
  const projectNames = JSON.parse(localStorage.getItem('projectNames')) || []

  const handleCardClick = () => {
    navigate('/project-flow')
  }

  return (
    <>
      <Header />
      <div className='main-container'>
        <div className='projects-container'>
          <h1>Projects</h1>
          <button type='button' id='podcasty-button'>
            <FaPodcast className='podcasty-icon' />
            <span>Create a New PodCast</span>
          </button>
        </div>
        <div className='projects-list-container'>
          {projectNames.map((name, index) => (
            <div
              key={index}
              className='card'
              onClick={handleCardClick} // Add onClick event handler to the card
            >
              <div className='card-image'></div>
              <div className='card-content'>
                <div>
                  <h3 className='card-title'>{name}</h3>
                </div>
                <p>{new Date().toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects

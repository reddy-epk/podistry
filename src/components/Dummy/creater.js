import React, {useState} from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

const Creater = () => {
  const [selectedOption, setSelectedOption] = useState('projects')

  const handleOptionClick = option => {
    setSelectedOption(option)
  }

  return (
    <div className="app">
      <Sidebar
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
      />
      <MainContent selectedOption={selectedOption} />
    </div>
  )
}

export default Creater

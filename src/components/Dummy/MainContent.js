import React from 'react'
import RouteProject from './RouteProject'
import Settings from './Settings'
import WidgetConfig from './WidgetConfig'
import './index.css'

const MainContent = ({selectedOption}) => {
  return (
    <div className="main-content">
      {selectedOption === 'projects' && <RouteProject />}
      {selectedOption === 'widget-configuration' && <WidgetConfig />}
      {selectedOption === 'settings' && <Settings />}
    </div>
  )
}

export default MainContent

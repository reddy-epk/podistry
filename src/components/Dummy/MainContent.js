import React from 'react'
import RouteProject from './RouteProject'
import Settings from './Settings'
import WidgetConfig from './WidgetConfig'

const MainContent = ({selectedOption}) => {
  let content = null

  switch (selectedOption) {
    case 'projects':
      content = <RouteProject />
      break
    case 'settings':
      content = <Settings />
      break
    case 'widget-configuration':
      content = <WidgetConfig />
      break
    default:
      content = null
  }

  return <div className="main-content">{content}</div>
}

export default MainContent

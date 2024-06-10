import {Link} from 'react-router-dom'
import {IoSettingsOutline} from 'react-icons/io5'
import './index.css'
const Sidebar = () => {
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
      <p>Podcast Update Flow</p>
      <div className="sidebar-top">
        <Link to="/project" className="circle-button">
          <span className="circle">1</span> Project
        </Link>
        <Link to="/widget-configuration" className="circle-button">
          <span className="circle">2</span> Widget Configuration
        </Link>
        <button className="circle-button">
          <span className="circle">3</span> Deployment
        </button>
        <button className="circle-button">
          <span className="circle">4</span> Pricing
        </button>
        <hr />
      </div>
      <hr />
      <Link to="/settings" className="circle-button setting-button">
        <IoSettingsOutline />
        <span className="spacer">Settings</span>
      </Link>
    </div>
  )
}

export default Sidebar

import React, {useState} from 'react'
import './Desplay.css'

const Desplay = () => {
  const [primaryColor, setPrimaryColor] = useState('#7BD568')
  const [fontColor, setFontColor] = useState('#3C3C3C')
  const [fontSize, setFontSize] = useState(25)
  const [chatHeight, setChatHeight] = useState('')
  const [chatIconSize, setChatIconSize] = useState('Small (48x48 px)')
  const [positionOnScreen, setPositionOnScreen] = useState('Bottom Right')
  const [distanceFromBottom, setDistanceFromBottom] = useState(20)
  const [horizontalDistance, setHorizontalDistance] = useState(20)
  const [botIcon, setBotIcon] = useState(null)

  const handleBotIconUpload = event => {
    setBotIcon(event.target.files[0])
  }

  return (
    <div className="desplay-container">
      <div className="containers-creation">
        <div className="setting-row1">
          <div className="setting-label">Primary Color</div>
          <div className="setting-input">
            <div className="tester">
              <input
                type="color"
                value={primaryColor}
                onChange={e => setPrimaryColor(e.target.value)}
              />
              <div
                className="color-preview"
                style={{backgroundColor: primaryColor}}
              />
            </div>
          </div>
        </div>

        <div className="setting-row2">
          <div className="setting-label">Font Color</div>
          <div className="setting-input">
            <div className="tester">
              <input
                type="color"
                value={fontColor}
                onChange={e => setFontColor(e.target.value)}
              />
              <div
                className="color-preview"
                style={{backgroundColor: fontColor}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containers-creation">
        <div className="setting-row3">
          <div className="setting-label fonteds">Font Size (in px)</div>
          <div className="setting-input">
            <input
              type="number"
              value={fontSize}
              onChange={e => setFontSize(e.target.value)}
            />
          </div>
        </div>

        <div className="setting-row4">
          <p className="setting-label fonted">
            Chat Height (in % of total screen)
          </p>
          <input
            type="text"
            value={chatHeight}
            onChange={e => setChatHeight(e.target.value)}
          />
        </div>
      </div>

      <div className="horizontal-line"></div>
      <div className="chat-icon-settings">
        <div className="setting-label">Chat Icon</div>
        <div className="containers-creation">
          <div className="setting-row6">
            <p className="setting-label ">Chat Icon Size</p>
            <select
              value={chatIconSize}
              onChange={e => setChatIconSize(e.target.value)}
            >
              <option>Small (48x48 px)</option>
              <option>Medium (64x64 px)</option>
              <option>Large (80x80 px)</option>
            </select>
          </div>
          <div className="setting-row7">
            <p className="setting-label">Position on Screen</p>
            <select
              value={positionOnScreen}
              onChange={e => setPositionOnScreen(e.target.value)}
            >
              <option>Bottom Right</option>
              <option>Bottom Left</option>
              <option>Top Right</option>
              <option>Top Left</option>
            </select>
          </div>
        </div>

        <div className="containers-creation">
          <div className="setting-row8">
            <p className="setting-label">Distance from Bottom (in px)</p>
            <input
              type="number"
              value={distanceFromBottom}
              onChange={e => setDistanceFromBottom(e.target.value)}
            />
          </div>

          <div className="setting-row9">
            <p className="setting-label">Horizontal Distance (in px)</p>
            <input
              type="number"
              value={horizontalDistance}
              onChange={e => setHorizontalDistance(e.target.value)}
            />
          </div>
        </div>

        <div className="setting-row">
          <p className="setting-label">Bot Icon</p>
          <label htmlFor="bot-icon-upload" className="upload-label">
            <p className="no-name"></p>
            <input
              id="bot-icon-upload"
              type="file"
              accept="image/*"
              onChange={handleBotIconUpload}
            />
          </label>
          {botIcon && (
            <img
              src={URL.createObjectURL(botIcon)}
              alt="Bot Icon"
              className="bot-icon-preview"
            />
          )}
          <p className="setting-description">Recommended Size: 48x48px</p>
        </div>
      </div>
    </div>
  )
}

export default Desplay

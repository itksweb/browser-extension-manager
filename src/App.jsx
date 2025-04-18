import { useState } from "react"
import Extension from "./components/Extension"
import moon from "./assets/images/icon-moon.svg"
import sun from "./assets/images/icon-sun.svg"
import logo from "./assets/images/logo.svg"

const initialData = [
  {
      "logo": "./assets/images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
  },
  {
      "logo": "./assets/images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
  },
  {
      "logo": "./assets/images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
  },
  {
      "logo": "./assets/images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
  },
  {
      "logo": "./assets/images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
  },
  {
      "logo": "./assets/images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
  }
]
function App() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([...initialData])
  
  return (
    <div className="w-[1024px] flex flex-col items-center" data-theme ={theme} >
      <header className=" flex justify-between items-center w-full p-5 bg-neutral-00 rounded-xl border-2 border-neutral-200 shadow-card-box">
        <img src={logo} alt="logo" />
        <img src={isDark ? sun:moon} alt="theme-switcher" />
      </header>
      <div className="extension-list">
        <div className="before-list"></div>
        <div className="main-list">
          {}
        </div>
      </div>
      
      <Extension />
      
    </div>
  )
}

export default App

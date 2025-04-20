import { useEffect, useState } from "react"
import Extension from "./components/Extension"


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
  const switchTheme =()=> setIsDark(!isDark);
  useEffect(()=> setTheme(isDark ? "dark":"light"),[isDark])
  
  return (
    <div className={`p-[2rem] w-[1440px] flex flex-col items-center bg-color text-color `} data-theme = {theme} >
      <header className={`flex justify-between items-center w-full p-3 header-bg rounded-xl mb-7`}>
        <img src="./assets/images/logo.svg" alt="logo"  />
        <button onClick={switchTheme}><img src={isDark ? "./assets/images/icon-sun.svg":"./assets/images/icon-moon.svg"} alt="theme-switcher" className="p-3 rounded-2xl theme-switch-bg" /></button>
      </header>
      
      <div className="extension-list w-full">
        <div className="before-list flex flex-col sm:flex-row items-center justify-between my-7">
          <h1 className="font-semibold text-4xl max-[639px]:mb-7 text-color">Extension List</h1>
          <div className="filter-buttons flex place-items-end ">
            <button className="py-2 px-5 rounded-full ml-1 btn ">All</button>
            <button className="py-2 px-4 rounded-full ml-1.5 btn">Active</button>
            <button className="py-2 px-4 rounded-full ml-1.5 btn">Inactive</button>
          </div>
        </div>
        <div className="w-full main-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(ext => <Extension key={ext.name} data={ext} isDark={isDark} />)}
        </div>
      </div>
      
      
      
    </div>
  )
}

export default App

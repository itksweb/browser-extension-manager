import { useEffect, useState } from "react";
import Extension from "./components/Extension";
import { initialData } from "./utils";



function App() {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([...initialData])
  const [filteredDta, setFilteredData] = useState([...data])
  const [visibleData, setVisibleData]= useState("All")

  const retrieveUserPref = () => {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
  useEffect(()=>{
    const info = retrieveUserPref();
    if (info && info !== theme) {
      setTheme(info);
      setIsDark(!isDark)
    }
  },[])

  const switchTheme =(myTheme)=> {
    localStorage.setItem("theme", myTheme);
    setTheme(myTheme);
    setIsDark(!isDark);
  };
  
  const selectData=(choice)=>{
    if (choice !== visibleData) setVisibleData(choice);
  }

  useEffect(()=>{
    switch (visibleData) {
      case "Active":
        setFilteredData(data.filter(ext => ext.isActive));
        break;
      case "Inactive":
        setFilteredData(data.filter(ext => !ext.isActive));
        break;    
      default: setFilteredData([...data]);
        break;
    }
  },[data, visibleData])
  
  const toggleActive=(index, name)=>{
    let workData = data.filter(item => name !== item.name);
    let workItem = data[index];
    workItem.isActive = !workItem.isActive;
    workData.splice(index, 0, workItem);
    setData([...workData]);
  }

  const removeExt = (name) => {
    const hasConfirmed = confirm("Are you sure zou want to delete this extension");
    if (hasConfirmed) {
      setData(prev => prev.filter(item => name !== item.name))
    }
  }

  
  return (
    <div className={`p-[2rem] w-full flex flex-col items-center bg-color text-color `} data-theme = {theme} >
      <header className={`flex justify-between items-center w-full p-3 header-bg rounded-xl mb-7`}>
        <img src="./assets/images/logo.svg" alt="logo"  />
        <button onClick={()=> switchTheme(isDark ? "light":"dark")}><img src={isDark ? "./assets/images/icon-sun.svg":"./assets/images/icon-moon.svg"} alt="theme-switcher" className="p-3 rounded-2xl theme-switch-bg" /></button>
      </header>
      
      <div className="extension-list w-full">
        <div className="before-list flex flex-col sm:flex-row items-center justify-between my-7">
          <h1 className="font-semibold text-4xl max-[639px]:mb-7 text-color">Extension List</h1>
          <div className="filter-buttons flex place-items-end ">
            {["All","Active","Inactive"].map(item => <button className={`py-2 px-4 rounded-full ml-1.5 btn ${visibleData === item ? "btn-active":"btn-normal"}`} key={item} onClick={()=>selectData(item)} >{item}</button>)}
            
          </div>
        </div>
        <div className="w-full main-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDta.map((ext, index) => <Extension key={ext.name} data={ext} index={index} removeExt={removeExt} toggleActive={toggleActive} />)}
        </div>
      </div>
      
      
      
    </div>
  )
}

export default App

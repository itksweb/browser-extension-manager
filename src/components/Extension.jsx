import { useEffect, useState } from "react"


const Extension = ({data, isDark}) => {
    const {logo, name, description, isActive} = data;
    const [activeRed, setActiveRed] = useState("bg-red-700")
    
    useEffect(()=> setActiveRed(isDark ? "bg-red-400":"bg-red-700"),[isDark])

  return (
    <div className={`min-w-96 ${isDark? "bg-neutral-700":"bg-neutral-00"} min-h-44 p-5 $ rounded-xl border-2 border-neutral-200 shadow-card-box flex flex-col justify-between`}>
        <div className="flex place-items-start ">
            <img src={logo} alt={`haha-logo`} />
            <div className="words ml-4">
                <h3 className="name text-left font-bold ">{name}</h3>
                <div className="description text-left">{description}</div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5">
            <button className="px-5 py-2 rounded-full border  ">Remove</button>
            <div className={`switch w-10 rounded-full h-5 flex items-center p-[2px] ${isActive ? activeRed:"bg-neutral-300 justify-start"} `}>
                <div className="switch-inner bg-white size-4 rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Extension
import { useEffect, useState } from "react"


const Extension = ({data, toggleActive, removeExt, index}) => {
    const {logo, name, description, isActive} = data;
    

  return (
    <div className={` my-card min-h-44 p-5 rounded-xl border-[1px] flex flex-col justify-between`}>
        <div className="flex place-items-start ">
            <img src={logo} alt={`haha-logo`} />
            <div className="words ml-4">
                <h3 className="card-name text-left font-bold ">{name}</h3>
                <div className="card-desc text-left">{description}</div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5">
            <button className="px-5 py-2 rounded-full btn card-btn" onClick={() => removeExt(name)}>Remove</button>
            <div className={` w-10 cursor-pointer rounded-full h-5 flex items-center p-[2px] ${isActive ? "switch-active-bg justify-end":"switch-bg justify-start"} `} onClick={()=> toggleActive(index, name)}>
                <div className="switch-inner bg-white size-4 rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Extension
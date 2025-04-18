import { useState } from "react"
import pix from "../assets/images/logo-devlens.svg"

const Extension = ({isActive = true}) => {
    

  return (
    <div className="w-96 p-5 bg-neutral-00 rounded-xl border-2 border-neutral-200 shadow-card-box ">
        <div className="flex place-items-start ">
            <img src={pix} alt="logo-devlens" />
            <div className="words ml-4">
                <h3 className="name text-left font-bold ">DevLens</h3>
                <div className="description text-left">Quickly inspect page layouts and visualize element boundaries.</div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5">
            <button className="px-5 py-2 rounded-full border hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ">Remove</button>
            <div className={`switch w-10 rounded-full h-5 flex items-center p-[2px] ${isActive ? "bg-red-700  justify-end":"bg-switch-bg justify-start"} `}>
                <div className="switch-inner bg-white size-4 rounded-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Extension
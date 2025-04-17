import pix from "../assets/images/logo-devlens.svg"

const Extension = () => {
  return (
    <div className="w-[320px] p-[20px] flex flex-col justify-between ">
        <div className="flex ">
            <img src={pix} alt="logo-devlens" />
            <div className="words">
                <div className="name text-left">DevLens</div>
                <div className="description text-left">Quickly inspect page layouts and visualize element boundaries.</div>
            </div>
        </div>
        <div className="flex justify-between mt-5">
            <button className="remove px-[20px] py-[10px] rounded-full border ">Remove</button>
            <div className="switch">
                <div className="switch-inner">switch</div>
            </div>
        </div>
    </div>
  )
}

export default Extension
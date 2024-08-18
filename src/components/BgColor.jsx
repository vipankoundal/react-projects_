import { useState } from "react"


const BgColor = () => {
    const[backgroundColor, setBackgroundColor]=useState("bg-black")
  return (
    <div className={`w-full h-screen duration-200 ${backgroundColor}`}>

    <div className="fixed inset-x-0 flex-wrap items-center justify-center px-2 bottom-12">
        <button className="mr-4 bg-black border-4 border-white shadow-sm rounded-2xl text-cyan-50" onClick={()=>setBackgroundColor("bg-black")}>Black</button>
        <button className="mr-4 bg-red-500 border-4 border-white shadow-sm rounded-2xl text-cyan-50" onClick={()=>setBackgroundColor("bg-red-500")}>Red</button>
        <button className="mr-4 bg-yellow-500 border-4 border-white shadow-sm rounded-2xl text-cyan-50" onClick={()=>setBackgroundColor("bg-yellow-500")}>Yellow</button>
        <button className="mr-4 bg-green-500 border-4 border-white shadow-sm rounded-2xl text-cyan-50" onClick={()=>setBackgroundColor("bg-green-500")}>Green</button>

    </div>

    </div>
  )
}

export default BgColor

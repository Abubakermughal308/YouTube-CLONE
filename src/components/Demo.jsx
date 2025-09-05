import { useState } from "react";

const Demo =()=>{
         const [windowApear , setWindowApear] = useState(false)

    return(
       <div className="w-full ">
      {windowApear &&<div className="flex justify-between absolute w-full h-screen z-40 items-center my-2 bg-transparent">
           <div className="rounded-xl w-6/12 h-6/12  bg-black mx-auto flex justify-center items-center shadow-2xl">


        </div>
       </div>}

         <div className="  border-2 rounded-2xl  border-gray-400  w-full px-4">
           <div className="h-auto ">
             <div className="flex justify-between px-3 my-2  ">
                <h1 className="font-bold text-xl">Folder</h1>
                <button className="shadow-lg  rounded-xl px-3 py-2 cursor-pointer" onClick={()=>setWindowApear(true)}>Add files</button>
            </div>  
            <div className="border-2 border-gray-200 w-full">
                box
            </div>
           </div>
        </div>
       
       </div>
    )
}
export default Demo;
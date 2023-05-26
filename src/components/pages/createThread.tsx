import axios from "axios";
import React, { useEffect, useState } from "react";

export const CreateThread:React.FC =()=> {
  const [threadTitle, setThreadTitle] =useState<string>("")

  const createNewThread =()=>{
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    axios.post(url, {title: `${threadTitle}`})
    .then((res)=> {
      console.log("res.data", res.data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
  }
  


  return (
    <div>
      <form className="w-1/2 mx-auto">   
          <div className="relative">
            {threadTitle}
              <input onChange={(e)=> setThreadTitle(e.target.value)} type="search" id="default-search" className="p-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Please input title for new thread" required />
              <button onClick={createNewThread} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-2">Add Thread</button>
          </div>
      </form>
    </div>
  )
}
import React from "react";
// import createPostImg from "./assets/img/create_post.svg"

export const CreateThreadButton:React.FC =()=> {
  return (
    <div data-dial-init className="fixed top-6 right-6 group">
        <button className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-blue-300 focus:outline-none">
        <svg aria-hidden="true" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </button>
    </div>
  )

}
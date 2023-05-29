import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreadForm } from "../ui/button/input/threadForm";

export const CreateThread:React.FC =()=> {
  const [threadTitle, setThreadTitle] =useState<string>("")
  const navigate = useNavigate();
  console.log({navigate})

  const createNewThread =(e: any)=>{
    e.preventDefault();
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    axios.post(url, {title: `${threadTitle}`})
    .then((res)=> {
      console.log("res.data", res.data)
      navigate("/")
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
  }
  return (
    <>
      <Link to="/" className="underline ml-10">Return to Home</Link>
      <ThreadForm 
        buttonName="Add Thread" 
        placeholderText="Input title for new thread"
        onSubmitFunc={createNewThread} 
        onChangeFunc={(e)=> setThreadTitle(e.target.value)}  />
    </>
  )
}
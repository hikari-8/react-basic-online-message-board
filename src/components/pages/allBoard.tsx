import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreadList } from "../model/thread/threadList";
import { Link } from "react-router-dom";
import { CreateThreadButton } from "../ui/button/createThreadButton";

export const AllBoard:React.FC =()=> {
  const [allBoardData, setAllBoardData] =useState([])
  useEffect(()=>{
    queryAllBoardData()
  },[])
  

  const queryAllBoardData =()=>{
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    axios.get(url)
    .then((res)=> {
      console.log("res.data", res.data)
      setAllBoardData(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
  }

  return (
    <>
      <div>全てのスレ掲示板です</div>
      <Link to="/thread/new">
        <CreateThreadButton />
      </Link>
      <ThreadList threads={allBoardData} />
    </>
  )
}
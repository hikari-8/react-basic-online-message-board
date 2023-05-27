import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreadList } from "../model/thread/threadList";
import { Link } from "react-router-dom";
import { CreateThreadButton } from "../ui/button/createThreadButton";

export const AllBoard:React.FC =()=> {
  const [allBoardData, setAllBoardData] =useState([])
  const [queryNum, setQueryNum] =useState<number>(0)
  useEffect(()=>{
    queryAllBoardData(queryNum)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const queryAllBoardData =(queryNum: number)=>{
    const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${queryNum}`
    axios.get(url)
    .then((res)=> {
      console.log("res.data", res.data)
      setAllBoardData(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
  }
  const nextData =()=> {
    const newQueryNum = queryNum + 10
    setQueryNum(newQueryNum)
    queryAllBoardData(newQueryNum)
  }
  const previousData =()=> {
    const newQueryNum = queryNum - 10
    setQueryNum(newQueryNum)
    queryAllBoardData(newQueryNum)
  }

  return (
    <>
      {
        allBoardData &&
        <>
          <Link to="/thread/new">
            <CreateThreadButton />
          </Link>
          <ThreadList threads={allBoardData} />
          <div className="w-1/4 text-center my-7 flex mx-auto">
            <div onClick={nextData} className="hover:underline cursor-pointer mr-10">👈 前の10件</div>
            <div onClick={previousData} className="hover:underline cursor-pointer">次の10件 👉</div>
          </div>
        </>
        
      }
    </>
  )
}
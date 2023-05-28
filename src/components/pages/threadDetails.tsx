import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateThreadButton } from "../ui/button/createThreadButton";

export const ThreadDetails:React.FC =()=> {
  const [allBoardData, setAllBoardData] =useState([])
  const [queryNum, setQueryNum] =useState<number>(0)
  const threadId = useParams().thread_id

  useEffect(()=>{
    if(threadId) {
      queryThreadData(threadId, queryNum)
    } else {
      console.error("No params thread_id")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const queryThreadData =(threadId: string, queryNum: number)=>{
    const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts?offset=${queryNum}`
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
    queryThreadData(threadId!, newQueryNum) 
  }
  const previousData =()=> {
    const newQueryNum = queryNum - 10
    setQueryNum(newQueryNum)
    queryThreadData(threadId!, newQueryNum)
  }

  return (
    <>
      {
        allBoardData &&
        <>
          <Link to="/thread/new">
            <CreateThreadButton />
          </Link>
          <div>マジどうでもいいよね、自分が楽しく昨日の自分より成長すれば良くね？</div>
        </>
        
      }
    </>
  )
}
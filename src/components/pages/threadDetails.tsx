import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreadForm } from "../ui/button/input/threadForm";
import { useParams } from "react-router-dom";
import { PostList } from "../model/post/postList";
import { Post } from "../../type/model";

export const ThreadDetails:React.FC =()=> {
  const [allBoardData, setAllBoardData] =useState<Post[] | null>([])
  const [queryNum, setQueryNum] =useState<number>(0)
  const [postSentence, setPostSentence] =useState<string>("")
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
      console.log("res.data", res.data.posts)
      setAllBoardData(res.data.posts);
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
  }

  const postData =(e: any)=>{
    const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`
    axios.post(url, { post: postSentence })
    .then((res)=> {
      console.log("res.data", res.data)
      setAllBoardData(res.data.posts);
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
        <div className="relative">
          <PostList posts={allBoardData} />
          <ThreadForm 
            buttonName="投稿する" 
            placeholderText="Input text for post"
            onSubmitFunc={postData} 
            onChangeFunc={(e)=> {setPostSentence(e.target.value)}} />
        </div>
      }
    </>
  )
}
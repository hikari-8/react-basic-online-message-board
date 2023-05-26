import React from "react";
import { Thread } from "../../../type/model"; //@で相対パスにしたい

type ThreadListCardProps = {
  thread: Thread
}

export const ThreadListCard:React.FC<ThreadListCardProps> =({thread})=> {
  return (
    <>
      {
        thread && 
        <div key={thread.id} className="bg-white block max-w-sm mx-auto w-1/2 p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{thread.title}</div>
            <div className="font-normal text-gray-700">{thread.id}</div>
        </div>
      }
    </>
  )
}
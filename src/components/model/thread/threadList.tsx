import React from "react";
import { Thread } from "../../../type/model"; //@で相対パスにしたい

type ThreadListCardProps = {
  thread: Thread
}

export const ThreadListCard:React.FC<ThreadListCardProps> =({thread})=> {
  console.log([thread])
  return (
    <>
      {
        thread && 
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{thread.id}</div>
            <div className="font-normal text-gray-700">{thread.title}</div>
        </div>
      }
    </>
  )
}
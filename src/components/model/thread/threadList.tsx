import React from "react";
import { ThreadListCard } from "./threadListCard";
import { Thread } from "../../../type/model";

type ThreadListProps = {
  threads: Thread[]

}


export const ThreadList:React.FC<ThreadListProps> =({threads})=> {
  return (
    <div className="flex flex-col justify-center w-full">
          {
            threads.map((thread) => {
              return <ThreadListCard thread={thread} />
              })
          }
    </div>
  )
}
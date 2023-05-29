import React from "react";
import { Post } from "../../../type/model";

export const PostListCard:React.FC<Post> =({postID, post})=> {
  return (
    <>
      {
        post && 
          <div key={postID} className="bg-white block max-w-sm mx-auto w-1/2 p-3 my-2 border border-gray-200 rounded-lg shadow">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post}</div>
          </div>
      }
    </>
  )
}
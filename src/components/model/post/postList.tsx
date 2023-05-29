import React from "react";
import { PostListCard } from "./postListCard";
import { Post } from "../../../type/model";

type PostListProps = {
  posts: Post[]
}

export const PostList:React.FC<PostListProps> =({posts})=> {
  return (
      <ul className="flex flex-col justify-center w-full my-10">
          {
            posts.map((post) => {
              return (
              <li key={post.postID}>
                <PostListCard post={post.post} postID={post.postID} />
              </li>
              )
              })
          }
    </ul>
  )
}
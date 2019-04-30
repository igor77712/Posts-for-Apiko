import React from "react";
import "./PostList.css";
import PostListItem from "../PostListItem/PostListItem";

const PostList = ({ data }) => {
  return (
    <ul className="PostList">
      {data.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            title={post.title}
            body={post.body}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default PostList;

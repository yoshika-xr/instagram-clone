import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/posts').
    then((data) => data.json()).
    then((data) => setPosts(data)).
    catch(err => console.log(err));
  },[]);

  return (
    <div className="d-flex justify-content-center">{posts.length > 0 ? (<div>
      {posts.map((post)=>(
        <div className="my-3" key={post.id}>
          <div className="d-flex">
            <img className="dp rounded-circle" src={post.user.profile_pic} alt="profilepic"/>
            <h6 className="mt-2">{post.user.username}</h6>
          </div>
          <div><img className="image" src={post.image} alt=""  /></div>
          <div>
            <i className="bi bi-heart"></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <b>{post.likes} Likes</b>
          <div>{post.caption}</div>
          
        </div>
      ))}
      </div>):( <div>loading...</div>)}</div>
  );
}

export default Posts;

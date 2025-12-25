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
    <div>{posts.length > 0 ? (<div>
      {posts.map((post)=>(
        <div key={post.id}>
          <div className="d-flex">
            <img className="dp rounded-circle" src={post.user.profile_pic} alt="profilepic"/>
            <h5>{post.user.username}</h5>
          </div>
          <div><img src={post.image} alt=""  /></div>
          
        </div>
      ))}
      </div>):( <div>loading...</div>)}</div>
  );
}

export default Posts;

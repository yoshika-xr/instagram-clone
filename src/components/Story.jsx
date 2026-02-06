import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Story() {
  const [Storys, setStorys] = useState("");
  const navigate=useNavigate();
  let tot=0;
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStorys(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="head d-flex gap-2">
      <div className="d-none">
          {tot=Storys.length}
      </div>
      {Storys.length > 0 ? (
        Storys.map((story) => (
          <div key={story.id} onClick={()=>{navigate(`/view/${(story.id)}/${tot}`)}}>
            <div className="gradiant-border">
            <img src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"></img>
            </div>
            <h4 className="fs-6 text-truncate" style={{width:"40px"}}>{story.user.username}</h4>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Story;

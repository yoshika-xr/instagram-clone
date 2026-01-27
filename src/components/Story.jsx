import React, { useEffect, useState } from "react";

function Story() {
  const [Storys, setStorys] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStorys(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="head d-flex gap-2">
      {Storys.length > 0 ? (
        Storys.map((story) => (
          <div key={story.id}>
            <img src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"></img>
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

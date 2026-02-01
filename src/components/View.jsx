import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [story, setstory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setstory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {story ? (
        <div>
          <img src={story.user.profile_pic}></img>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default View;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function View() {
  const { id } = useParams();
  const [vstory, setVstory] = useState(null);
  useEffect(()=>{
    fetch(`http://localhost:3000/story/${id}`)
      .then(data => data.json())
      .then(data => setVstory(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {vstory ? <div>{vstory.user.username}</div> : <div>Loading....</div>}
    </div>
  );
}

export default View;

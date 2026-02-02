import React, { useState, useEffect } from "react";
import { useParams ,Link} from "react-router-dom";

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
      {story ? 
        <div className="d-flex justify-content-center align-items-center m-2">
           <Link><i class="bi bi-arrow-left-circle-fill"></i></Link>
         <img className="vh-100 " src={story.image} alt="story"></img>
          <Link><i class="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
       : 
        <div>Loading....</div>
      }
    </div>
  );
}

export default View;

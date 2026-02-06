import React, { useState, useEffect } from "react";
import { useParams ,Link,Navigate, useNavigate} from "react-router-dom";

function View() {
  const { id,tot } = useParams();
  const [story, setstory] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setstory(data))
      .catch((err) => console.log(err));
  }, [id]);

  if(id >tot || id <=0){
    navigate('/');
  }
  return (
    <div>
      {story ? 
        <div className="d-flex justify-content-center align-items-center m-2">
           <Link to={`http://localhost:5173/view/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
         <img className="vh-100 " src={story.image} alt="story"></img>
          <Link to={`http://localhost:5173/view/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
       : 
        <div>Loading....</div>
      }
    </div>
  );
}

export default View;

import React, { useEffect, useState } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestion, setsuggestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/suggestion")
      .then((data) => data.json())
      .then((data) => setsuggestion(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="d-flex">
        <img
          className="dp rounded-circle"
          src={post.user.profile_pic}
          alt="profilepic"
        />
        <h6 className="mt-2">{post.user.username}</h6>
      </div>
    </div>
  );
}

export default Suggestion;

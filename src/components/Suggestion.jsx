import React, { useEffect, useState } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/suggestion")
      .then((data) => data.json())
      .then((data) => setSuggestion(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="suggestion w-75 m-4">
      {profile ? (
        <div className="d-flex">
          <img
            className="dp rounded-circle"
            src={profile.profile_pic}
            alt="profilepic"
            />
          <h6 className="mt-2">{profile.username}</h6>
          <small className="ms-auto text-primary">Switch</small>
        </div>
      ) : (
        <p>loading...</p>
      )}
      </div>
    </div>
  );
}

export default Suggestion;

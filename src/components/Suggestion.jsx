import React, { useEffect, useState } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestion] = useState([]);

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

        <div className="d-flex m-3">
          <p>suggestion for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="d-flex mb-2">
                <img
                  className="dp rounded-circle"
                  src={suggestion.profile_pic}
                  alt="profilepic"
                />
                <h6 className="mt-2 ms-2">{suggestion.username}</h6>
              </div>
            ))}
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default Suggestion;

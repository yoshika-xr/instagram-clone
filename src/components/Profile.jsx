import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((data) => {
        setProfile(data.data);
        console.log(data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/followers")
      .then((data) => {
        setFollowers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  function HandleonChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const handleUpdate = async () => {
    axios
      .put("http://localhost:3000/profile", profile)
      .then(console.log("updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="m-3">
      {profile ? (
        <div>
          <img
            className="profile rounded-circle"
            src={profile.profile_pic}
            alt="profile"
          />
          <h1 className="">{profile.username}</h1>
          <label>name:</label>
          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-3"
            onChange={HandleonChange}
          />
          <input
            type="text"
            value={profile.profile_pic}
            name="profile_pic"
            className="form-control my-3"
            onChange={HandleonChange}
          />
          <button className="btn btn-primary my-2" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;

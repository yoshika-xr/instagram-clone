import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/profile").then((data) => {
      setProfile(data.data);
    });
    console.log(data);
  }, []);
  return (
    <div className="m-3">{profile ? <div>
      <img className="profile rounded-circle"  src={profile.profile_pic} alt="profile"/>
      <h1 className="">{profile.username}</h1>
    </div> : <div>Loading...</div>}
    <label>name:</label>
    <input type="text" /></div>
  );
}

export default Profile;

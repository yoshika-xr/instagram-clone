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
    <div>{profile ? <div>
      <h1>{profile.username}</h1>
      <img  src={profile.profile_pic} alt="profile"/>
    </div> : <div>Loading...</div>}</div>
  );
}

export default Profile;

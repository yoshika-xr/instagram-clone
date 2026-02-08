import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
    .then((data) => {setProfile(data.data)});
    console.log(data);
  });
  return <div>Profile</div>;
}

export default Profile;

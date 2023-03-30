import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const url_profiles = "http://127.0.0.1:3000/api/v1/section";


function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch the list of profiles from the server
    axios.get(url_profiles)
    .then(response => {
      console.log('Success:', response);
      setProfiles(response.data.profiles)
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error)
    });
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          gender={profile.gender}
          birthday={profile.birthdate}
          city={profile.city}
        />
      ))}
    </div>
  );
}

export default ProfileList;
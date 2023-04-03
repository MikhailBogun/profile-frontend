import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import axios from "axios";
import ProfileCard from "./ProfileCard";

function ProfileList({all}) {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let current_url = process.env.REACT_APP_BACKEND_URL + 'profile';

  const handleOpenModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setIsModalOpen(false);
  }

  function handleSaveChanges(updatedProfile) {
    const updatedProfiles = profiles.map((profile) => {
      if (profile.id === updatedProfile.id) {
        return updatedProfile;
      }
      return profile;
    });
    setProfiles(updatedProfiles);
    setIsModalOpen(false);
  }


  const getProfiles = () => {
    axios.get(current_url, {
      params: {
        all: all
      }
    })
    .then(response => {
      console.log('Success:', response);
      setProfiles(response.data.profiles)
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/');
    });
  }

  useEffect(() => {
    getProfiles()
  }, [all]);

  return (
    <div className="main-container">

    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          obtainProfiles={getProfiles}
          url={current_url}
        />
      ))}
    </div>
    </div>
    
  );
}

export default ProfileList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

function ProfileList() {

  const url_profiles = "http://127.0.0.1:3000/api/v1/section";

  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(profile) {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
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
    axios.get(url_profiles)
    .then(response => {
      console.log('Success:', response);
      setProfiles(response.data.profiles)
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error)
    });
  }

  useEffect(() => {
    getProfiles()
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          obtainProfiles={getProfiles}
          url={url_profiles}
        />
      ))}

      {/* {isModalOpen && (
        <EditProfileModal
          profile={selectedProfile}
          onSaveChanges={handleSaveChanges}
          onCloseModal={handleCloseModal}
        />
      )} */}
    </div>
    
  );
}

export default ProfileList;
import React, { useState } from 'react';
import EditProfileModal from './EditProfileModal';
import axios from "axios";


import "./ProfileCard.css";

function ProfileCard({ profile, obtainProfiles, url}) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  }

  const DeleteCard = () => {
    axios.delete(url+'/'+ profile.id, {  data: {
      id_profile: profile.id
    }})
    .then(response => {
      console.log('Success:', response);
      obtainProfiles();
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error)
    });
  }

  const handleEditModalClose = () => {
    obtainProfiles();
    setShowEditModal(false);
  }
  return (
    <div className="profile-card" >
      <div className="profile-name">{profile.name}</div>
      <div className="profile-info">
        <div className="profile-field">
          <span>{profile.gender}</span>
        </div>
        <div className="profile-field">
          <span>{profile.birthdate}</span>
        </div>
        <div className="profile-field">
          <span>{profile.city}</span>
        </div>
      </div>
      <div className="profile-card-footer">
        <button className="profile-card-edit-button" onClick={handleEditClick}>Edit</button>
        <button className="profile-card-delete-button" onClick={DeleteCard}>Delete</button>
      </div>
      <EditProfileModal show={showEditModal} profile={profile} handleClose={handleEditModalClose} url={url}/>
    </div>
  );
}

export default ProfileCard;
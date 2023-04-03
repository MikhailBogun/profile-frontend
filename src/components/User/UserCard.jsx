import React, { useState } from 'react';
// import EditProfileModal from './EditProfileModal';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';



import "./UserCard.css";

function UserCard({ user, obtainProfiles, url}) {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);
  // let current_url = process.env.REACT_APP_BACKEND_URL + 'user/'+user.id;
  


  // const handleEditClick = () => {
  //   setShowEditModal(true);
  // }

  // const DeleteCard = () => {
  //   axios.delete(url, {  data: {
  //     id_profile: profile.id
  //   }})
  //   .then(response => {
  //     console.log('Success:', response);
  //     obtainProfiles();
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     alert(error)
  //   });
  // }

  // const handleEditModalClose = () => {
  //   obtainProfiles();
  //   setShowEditModal(false);
  
  // }

  const OpenUserEdit = (event,user ) => {
    event.preventDefault();
    navigate('/user/'+user.id, { state: { user: user }})
  }

  return (
    <div className="profile-card" onClick={(event) => OpenUserEdit(event, user)}   >
      <div className="profile-name">{user.username}</div>
      <div className="profile-info">
        <div className="profile-field">
          <span>{user.email}</span>
        </div>
        <div className="profile-field">
          <span>{user.profile_count}</span>
        </div>
      </div>
      {/* <div className="profile-card-footer">
        <button className="profile-card-edit-button" onClick={handleEditClick}>Edit</button>
        <button className="profile-card-delete-button" onClick={DeleteCard}>Delete</button>
      </div> */}
      {/* <EditProfileModal show={showEditModal} profile={profile} handleClose={handleEditModalClose} url={url}/> */}
    </div>
  );
}

export default UserCard;

import React, { useState } from 'react';
// import EditProfileModal from './EditProfileModal';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileList from '../Profile/ProfileList';



// import "./UserCard.css";

function UserDetails() {
  const location = useLocation().state
  const [user, setUser] = useState(location.user)
  console.log(user)

  // // const handleEditClick = () => {
  // //   setShowEditModal(true);
  // // }

  // // const DeleteCard = () => {
  // //   axios.delete(url, {  data: {
  // //     id_profile: profile.id
  // //   }})
  // //   .then(response => {
  // //     console.log('Success:', response);
  // //     obtainProfiles();
  // //   })
  // //   .catch(error => {
  // //     console.error('Error:', error);
  // //     alert(error)
  // //   });
  // // }

  // // const handleEditModalClose = () => {
  // //   obtainProfiles();
  // //   setShowEditModal(false);
  
  // // }

  // const OpenUserEdit = (event,user ) => {
  //   event.preventDefault();
  //   console.log(user)
  //   navigate('/user/'+user.id)
  // }

  function onEdit() {

  }

  function onDelete() {

  }

  return (
    <div>
    <div className="d-flex justify-content-center align-items-center vh-200">
      <div className="text-center">
      <h5 className="card-title">{user.username}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-text">{user.isAdmin ? "Admin" : "User"}</p>
        <button className="btn btn-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </div>
    </div>
    <ProfileList></ProfileList>
    </div>
  );
}

export default UserDetails;
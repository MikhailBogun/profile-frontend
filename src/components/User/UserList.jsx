import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const navigate = useNavigate();


  const url_users = "http://127.0.0.1:3000/api/v1/user";

  const [users, setUsers] = useState([]);
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

  function handleSaveChanges(updatedUser) {
    const updatedUsers = users.map((profile) => {
      if (profile.id === updatedUser.id) {
        return updatedUser;
      }
      return profile;
    });
    setUsers(updatedUsers);
    setIsModalOpen(false);
  }


  const getUsers = () => {
    axios.get(url_users)
    .then(response => {
      console.log('Success:', response);
      setUsers(response.data)
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/');
    });
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div className="profile-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          obtainUsers={getUsers}
          url={url_users}
        />
      ))}
    </div>
    
  );
}

export default UserList;
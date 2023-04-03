import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const current_url = process.env.REACT_APP_BACKEND_URL + "user";


  const handleOpenModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedProfile(null);
    setIsModalOpen(false);
  }

  const handleSaveChanges = (updatedUser) => {
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
    axios.get(current_url)
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
          url={current_url}
        />
      ))}
    </div>
    
  );
}

export default UserList;
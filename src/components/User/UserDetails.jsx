import React, { useEffect, useState} from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileList from '../Profile/ProfileList';
import EditUserModal from './EditUserModal';

function UserDetails() {
  const navigate = useNavigate();

  const location = useLocation()
  const nestedLevel = location.pathname.split('/').pop();
  const [showEditModal, setShowEditModal] = useState(false);

  const [user, setUser] = useState('')
  let current_url = process.env.REACT_APP_BACKEND_URL + 'user/'+nestedLevel;

  const obtainUser = () => {
    axios.get(current_url)
    .then(response => {
      console.log('Success:', response);
      setUser(response.data.user)

    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/users');
    });
  }

  useEffect(() => {
    obtainUser()
  }, [nestedLevel]);
  

  function onDelete() {

  }

  const handleEditClick = () => {
    setShowEditModal(true);
  }

  const handleEditModalClose = () => {
    obtainUser();
    setShowEditModal(false);
  }

  const DeleteCard = () => {
    axios.delete(current_url)
    .then(response => {
      console.log('Success:', response);
      navigate('/users');

    })
    .catch(error => {
      console.error('Error:', error);
      alert(error);
      navigate('/users');

    });
  }


  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-200">
        <div className="text-center">
        <h5 className="card-title">{user.username}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.isAdmin ? "Admin" : "User"}</p>
          <button className="btn btn-primary mx-2" onClick={handleEditClick}>Edit</button>
          <button className="btn btn-danger mx-2" onClick={() => { DeleteCard()}}>Delete</button>
        </div>
      </div>
      <ProfileList id={user.id}></ProfileList>
      <EditUserModal show={showEditModal} user={user} handleClose={handleEditModalClose} url={current_url}/>

    </div>
  );
}

export default UserDetails;
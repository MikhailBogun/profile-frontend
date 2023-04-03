import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from "axios";
import ProfileCard from "./ProfileCard";

const cookies = new Cookies();


function ProfileList({id, all}) {
  console.log("ID ", all)
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [main_user_id, setMainUserId] = useState(cookies.get('user_id'));

  let current_url = process.env.REACT_APP_BACKEND_URL + 'profile';


  const getUserProfile = (id) => {

    axios.get(current_url + '/' + id)
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

  const getUsersProfile = () => {
    console.log('getUsersProfile')
    axios.get(current_url)
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


  const getProfiles = () => {
    console.log(all)
    if(all) {
      getUsersProfile();
    }
    else {
      let current_id = id || main_user_id;
      getUserProfile(current_id);
    }
  }

  useEffect(() => {
    setMainUserId(cookies.get('user_id'))
    getProfiles()
  }, [all, id]);

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
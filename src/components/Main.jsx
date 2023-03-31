import { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './main.css';
import Header from './Header';
import ProfileList from './Profile/ProfileList';
import UserList from './User/UserList';
const url_profiles = "http://127.0.0.1:3000/api/v1/section";




function Main({ page }) {
 
  return (
    <div className="main-container">
    </div>
  );
}

export default Main;
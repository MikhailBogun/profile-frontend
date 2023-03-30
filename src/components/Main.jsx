import { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './main.css';
import ProfileList from './Profile/ProfileList';
const url_registration = "http://127.0.0.1:3000/api/v1/registration";
const url_profiles = "http://127.0.0.1:3000/api/v1/section";




function Main() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('JohnDoe'); // replace with actual username



  function Logout() {
    let headers =  { headers: { Authorization: axios.defaults.headers.common['Authorization']}}
    axios.delete(url_registration, headers)
    .then(response => {
      console.log('Success:', response);
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      axios.defaults.headers.common['Authorization'] = ``;
      navigate('/')
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error)
    });

  }

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="title">{username}</h1>
        <div className="menu">
          <a href="#" className="menu-item">Dashboard</a>
          <a href="#" className="menu-item" onClick={()=>{ Logout()}}>Logout</a>
        </div>
      </header>
      <ProfileList></ProfileList>
      {/* add the rest of the page content here */}
    </div>
  );
}

export default Main;
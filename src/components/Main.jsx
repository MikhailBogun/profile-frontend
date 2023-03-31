import { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './main.css';
import Header from './Header';
import ProfileList from './Profile/ProfileList';
const url_profiles = "http://127.0.0.1:3000/api/v1/section";




function Main({ page }) {
  let list;
  switch (page) {
    case "profiles":
      list =  <ProfileList></ProfileList>;
      break;
    case "all_profiles":
      list =  <ProfileList all={true}></ProfileList>;
      break;
    default:
      console.log("Sorry, we are out of " + ".");
  }

  return (
    <div className="main-container">
      <Header></Header>
      {list}
    </div>
  );
}

export default Main;
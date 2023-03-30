import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-name">{props.name}</div>
      <div className="profile-info">
        <div className="profile-field">
          <span>{props.gender}</span>
        </div>
        <div className="profile-field">
          <span>{props.birthday}</span>
        </div>
        <div className="profile-field">
          <span>{props.city}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
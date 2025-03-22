import React from 'react'
import './ProfileCard.css'
import icons from './icons'

const ProfileCard = ({ name, photo, bio }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s photo`} className="profile-photo" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <div className="social-icons">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-snapchat"></a>
      </div>
    </div>
  )
}

export default ProfileCard
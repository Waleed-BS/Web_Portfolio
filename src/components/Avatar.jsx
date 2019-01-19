import React from 'react';
import avatar from '../assets/images/avatar.jpg';
// import logo24 from '../assets/logo24.jpg';

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author') && avatar} 
      alt="waleed-bs.com"
    />
  </div>
)

export default Avatar;
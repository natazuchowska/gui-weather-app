import './Profile.css';
import React from 'react';

function Profile(){
    return(
        <div className='profile-section'>
            <header className="title">Jane Reid</header>
            <div>
                <img alt="farmer" className='profile-img' src="./icons/profile.png"></img>
            </div>
        </div>
    )

}
export default Profile;
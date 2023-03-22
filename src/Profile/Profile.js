import './Profile.css';
import React from 'react';

// a page to display the profile of the farmer
function Profile(){
    return(
        <div className='profile-section'>
            <header className="title">Jane Reid</header>
            <p className='subscr'>Farmer</p>
            <div>
                <img alt="farmer" className='profile-img' src="./icons/profile.png"></img>
            </div>
            <div className='about-me'>
                <h1>About me</h1>
                <p>blablablabla</p>
                <h1>Crops I like to grow</h1>
                <list>
                    <li>crop 1</li>
                    <li>crop 2</li>
                    <li>crop 3</li>
                    <li>crop 4</li>
                </list>
            </div>
        </div>
    )

}
export default Profile;
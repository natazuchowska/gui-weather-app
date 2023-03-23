import './Profile.css';
//import React from 'react';
import React, { useState, useEffect } from 'react';


// A Profile component used to display the profile of the farmer.
function Profile(){

    const [aboutMe, setAboutMe] = useState('');

    const handleAboutMeChange = (event) => {
        setAboutMe(event.target.value);
    }

    useEffect(() => {
        const storedAboutMe = localStorage.getItem('aboutMe');
        if (storedAboutMe) {
            setAboutMe(storedAboutMe);
        }
    }, []);


    return(
        <div className='profile-section'>
            <header className='title'>Profile</header>
            <p className='subscr'>Farmer</p>
            <div>
                <img alt="farmer" className='profile-img' src="./icons/profile.png"></img>
            </div>
            <div className='about-me'>
                <h1>About me</h1>
                <textarea className = 'aboutText' value={aboutMe}
                    onChange={handleAboutMeChange}
                    placeholder="Hello there! My name is Jane, and I am a farmer with over 20 years of experience in agriculture. I was born and raised on a farm in the rural countryside, and from a young age, I was fascinated by the wonders of nature and the art of farming.
                    Over the years, I have grown all kinds of crops, from wheat and corn to soybeans and sunflowers. I have also raised livestock, including cattle, pigs, and chickens. As a farmer, I understand the importance of weather conditions for crop growth and animal health. That's why I rely on agricultural weather apps to help me make informed decisions about planting, harvesting, and managing my farm.
                    In my free time, I enjoy reading about the latest developments in agricultural technology and sharing my knowledge with other farmers. I believe that by working together and sharing information, we can help to create a sustainable future for agriculture.">
                </textarea>
                <h1>Crops I like to grow</h1>
                    <list>
                        <li>Sweetcorn</li>
                        <li>Sugar beets</li>
                        <li>Raddish</li>
                    </list>
            </div>
        </div>
    )
}
export default Profile;
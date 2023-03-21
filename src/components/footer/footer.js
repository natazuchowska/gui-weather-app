import React from 'react';
import './footer.css';
import { redirect } from "react-router-dom";

const Footer = () => {

    function onHomeClick(i) {
        if (i===1) {
            redirect("gui-weather-app/src/Explore/Explore.js");
        }
        if (i===2) {
            redirect("gui-weather-app/src/App.js");
        }
        if (i===3) {
            redirect("gui-weather-app/src/Profile/Profile.js");
        }
        else {
            return;
        }
    }

    return (
        <div>
            <footer className="foot">
                <button className='redirect-btn' onClick={onHomeClick(1)}><img alt="redirection" className='redirect-img' src="./icons/wheat.png"></img></button>
                <button className='redirect-btn' onClick={onHomeClick(2)}><img alt="redirection" className='redirect-img' src="./icons/home.png"></img></button>
                <button className='redirect-btn' onClick={onHomeClick(3)}><img alt="redirection" className='redirect-img' src="./icons/user.png"></img></button>
            </footer>
        </div>
    );
}

export default Footer;
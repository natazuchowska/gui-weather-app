import React from 'react';
import './footer.css';

const Footer = ({ setPage }) => {
    return (
        <footer className="foot">
            <button className='redirect-btn' onClick={() => setPage('explore')}><img alt="redirection" className='redirect-img' src="./icons/wheat.png"></img></button>
            <button className='redirect-btn' onClick={() => setPage('home')}><img alt="redirection" className='redirect-img' src="./icons/home.png"></img></button>
            <button className='redirect-btn' onClick={() => setPage('profile')}><img alt="redirection" className='redirect-img' src="./icons/user.png"></img></button>
        </footer>
    );
}

export default Footer;
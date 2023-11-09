import React from 'react';
import './Home.css';
import github from './images/icon_github.gif';
import linkedin from './images/icon_linkedin.gif';
import instagram from './images/icon_instagram.gif'
import { Link } from 'react-router-dom';
import Bgvideo from './images/background_video.mp4';

function Home() {
    return (
        <>
            <video autoPlay loop muted className='responsive-video'>
                <source src={Bgvideo} type='video/mp4'></source>
            </video>
            <div className="home_content">
                <h1 className='name'>Hi, I am <span className='my_name'>Anas Mohammad</span></h1>
                <p className='summary'>I am a Full Stack Web Developer, I can build responsive website</p>
                <div className='home_links'>
                    <Link to="https://github.com/Anas4746">
                        <img src={github} alt='github'></img></Link>
                    <Link to="https://www.linkedin.com/in/anas-mohammad-242761232/">
                        <img src={linkedin} alt='linkedin'></img></Link>
                    <Link>
                        <img src={instagram} alt='instagram'></img></Link>
                </div>
            </div>
        </>
    );
}

export default Home;

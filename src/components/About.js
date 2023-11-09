
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
// import AnasImg from './images/AnasImage.jpg';
import AnasAbtImg from './images/AnasAbtImg.jpeg';
import webIcon from './images/icon_webdesign.png';
import webdevIcon from './images/icon_webdev.png';

function About() {
    return (
        <div className='about'>

            <div className='about_heading container-fluid'>
                <h1>ABOUT ME</h1>
            </div>

            <div className='about_content container-fluid'>
                <img className='about_image' src={AnasAbtImg} alt='pic.jpg'></img>
                <div className='about_content_text'>
                    <h1>I am <span>Anas Mohammad</span></h1>
                    <p>I am a Full Stack Web Developer, I can build responsive websites.</p>
                    <span><span>Full Name: </span> Anas Mohammad</span>
                    <span><span>Education:</span> B.Tech(CSE)-2024</span>
                    <span><span>Nationality: </span>  Indian</span>
                    <span><span>Languages: </span> English, Hindi</span>
                    <Link to='https://drive.google.com/file/d/1_gDTvun1VT529oUAkCM7acUvM14Uy_9j/view?usp=drivesdk'><button>DOWNLOAD CV</button></Link>
                </div>
            </div>

            <div className='about_service_heading container-fluid'><h1>SERVICES</h1></div>
            <div className='about_services container-fluid'>
                <div className="card card_1">
                    <img className="card-img-top" src={webIcon} alt="Card_image_cap" />
                    <div className="card-body">
                        <h5 className="card-title">Web Design</h5>
                        <p className="card-text">Let's bring your web vision to life with stunning, user-friendly design. I'm here to make it happen!</p>
                    </div>
                </div>
                <div className="card card_2">
                    <img className="card-img-top" src={webdevIcon} alt="Card_image_cap" />
                    <div className="card-body">
                        <h5 className="card-title">Web development</h5>
                        <p className="card-text">Crafting dynamic websites that captivate and perform. Elevate your online presence with expert web development.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About

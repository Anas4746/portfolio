
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css';
import AnasImg from './images/AnasImage.jpg';
import menuIcon from './images/icon_menu.png';
import crossIcon from './images/icon-cross.png';

export default function Sidebar() {
    let location = useLocation()
    const [isChecked, setChecked] = useState(false)
    const navShow = () => {
        setChecked(!isChecked)
    }
    console.log(location.pathname)
    return (
        <>
            <nav>
                <input type="checkbox" id="check" checked={isChecked} />
                <label htmlFor="check" className="checkbtn" onClick={navShow}>
                    <img src={isChecked ? crossIcon : menuIcon} alt='menuIcon'></img>
                </label>
                <ul className='nav_link_container'>
                    <li className='mt-5 mb-4'><div className='profile_img mt-5'><img src={AnasImg} alt='Profile.jpg'></img></div></li>
                    <hr className='horizontal' />
                    <li><Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={navShow} id='home_link' to="/">Home</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={navShow} id='about_link' to="/about">About</Link></li>
                    <li><Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={navShow} to="/portfolio">Portfolio</Link></li>
                    {/* <li><Link className="nav-link mb-2" onClick={navShow} to="/">Contact</Link></li> */}
                    <hr className='horizontal' />
                </ul>
            </nav>
        </>
    )
}

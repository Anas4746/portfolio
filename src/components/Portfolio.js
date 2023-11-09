
import React from 'react';
import './Portfolio.css';
import newsapp_video from './images/newsapp_video.mp4'
import e_commerce from './images/e-commerce_video.mp4'
import text_conv from './images/textconv_video.mp4'

export default function Portfolio() {
    return (
        <div className='Portfolio'>

            <div className='Portfolio_heading container-fluid'><h1>PROJECTS</h1></div>

            <div className='projects_card container-fluid'>
                <div className='card_row'>
                    <div className="card card1">
                        <video autoPlay loop muted className='portfolio_card_video'>
                            <source src={e_commerce} type='video/mp4'></source>
                        </video>
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Website: (Developed in MERN)</h5>
                            <p className="card-text" >Introducing a versatile e-commerce platform that empowers users to establish their online presence, showcase products, and engage with customers seamlessly.</p>
                            {/* <ol>
                                <li>Registered clients can sell products and grow their business on our platform.</li>
                                <li>Enhance shopping with product selection and price display in the cart.</li>
                            </ol> */}
                        </div>
                    </div>
                    <div className="card card2">
                        <video autoPlay loop muted className='portfolio_card_video'>
                            <source src={newsapp_video} type='video/mp4'></source>
                        </video>
                        <div className="card-body">
                            <h5 className="card-title">News Website: (Developed in React.js)</h5>
                            <p className="card-text">Created and manage a dynamic global news site, delivering real-time, comprehensive coverage of politics, tech, entertainment, health, and more via APIs for timely updates.</p>
                            {/* <ol>
                                <li>News categorized into diverse sections for easy access.</li>
                                <li>Effortless reading customized to your unique interests.</li>
                            </ol> */}
                        </div>
                    </div>
                </div>
                <div className='card_row'>
                    <div className="card card3">
                        <video autoPlay loop muted className='portfolio_card_video'>
                            <source src={text_conv} type='video/mp4'></source>
                        </video>
                        <div className="card-body">
                            <h5 className="card-title">Text Converter: (Developed in React.js)</h5>
                            <p className="card-text">Welcome to our Text Converter, your one-stop solution for text transformations. Change case, encode messages, count characters, and more. Simplify text editing with our free tool.</p>
                            {/* <ol>
                                <li>News categorized into diverse sections for easy access.</li>
                                <li>Effortless reading customized to your unique interests.</li>
                            </ol> */}
                        </div>
                    </div>
                    {/* <div className="card">
                        <img className="card-img-top" src="..." alt="Card_image_cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

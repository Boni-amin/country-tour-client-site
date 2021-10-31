import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about fs-4 mt-5 pt-md-4 pb-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-7">
                        <div className="text-center">
                            <h5>Some Story Behind Us</h5>
                            <h1 className="about-h1">WE HAVE 20 YEARS OF EXPERINCE</h1>
                            <p>tourcountry.com is a premium online booking portal which allows you to purchase tickets for various bus services, launch services, movies and events across the country. It also lets you purchase travel tickets in the simplest.</p>
                        </div>
                        <div className="row d-flex justify-content-between mt-4">
                            <div className="col-md-5">
                                <h6 className="about-h5">Our Mission</h6>
                                <p>You will be offered the list of available tickets based on your selection. Then you can proceed for payment through the portal. In just a few clicks, you can purchase tickets from anywhere!</p>
                            </div>
                            <div className="col-md-5">
                                <h6 className="about-h5">Our Vision</h6>
                                <p>We offer you to choose your PREFERRED SEAT (along with Male/Female option) from more than 40 best bus operators. An SMS is sent to the user once the purchase is confirmed. This SMS has the. </p>
                            </div>
                            <div className="text-center mt-3"><button className="btn all-button">READ MORE</button></div>
                        </div>
                    </div>
                    <div className="col-md-4 px-15px px-md-0">
                        <div className="row d-flex justify-content-between align-items-center mt-5">
                            <img className="img-fluid" src="https://st3.depositphotos.com/30536028/32588/v/1600/depositphotos_325883790-stock-illustration-travel-time-banner-travel-agency.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
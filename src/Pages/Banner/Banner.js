import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <Carousel className="banner-carousel-bgc">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    className="d-block w-100"
                    src="https://joile.in/upload/JayveerBanner2.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner-carousle">
                    <h1>We Make Awesome Tours</h1>
                    <p>Online Ticketing Network</p>
                    <button className="btn all-button mb-4 mt-2">buy ticket</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://joile.in/upload/JayveerBanner2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="banner-carousle">
                <h1>We Make Awesome Tours</h1>
                    <p>Online Ticketing Network</p>
                    <button className="btn all-button mb-4 mt-2">buy ticket</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;
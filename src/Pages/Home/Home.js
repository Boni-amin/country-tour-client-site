import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import Natural from '../Natural/Natural';

const Home = () => {
    return (
        <div id="">
        <Banner></Banner>
        <About></About>
        <HomeService />
        <Natural />
        </div>
    );
};

export default Home;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Img1 from '../src/Images/Img1.png';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name="Grow your Business with" img={Img1} visit="/services" btname="Get Started" />
        </>
    );
};

export default Home;
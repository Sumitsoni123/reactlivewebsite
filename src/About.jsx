import React from 'react';
import { NavLink } from 'react-router-dom';
import Img3 from '../src/Images/Img3.png';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Let us Introduce To"
                img={Img3}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;
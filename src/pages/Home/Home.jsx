import React from 'react';
import Banner from './Banner';
import Skill from './Skill';
import Education from './../Education/Education';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skill/>
            <Project/>
            <Education/>
            <Contact/>

        </div>
    );
};

export default Home;
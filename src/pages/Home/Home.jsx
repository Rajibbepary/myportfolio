import React from 'react';
import Banner from './Banner';
import Skill from './Skill';
import Education from './../Education/Education';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Skill/>
            <Project/>
            <Education/>

        </div>
    );
};

export default Home;
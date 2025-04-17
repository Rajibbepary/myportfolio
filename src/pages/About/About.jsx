
import React from 'react';
import about from '../../assets/raj-removebg-preview.png'
import Education from '../Education/Education';
const About = () => {
    return (
        <div >
            <div className='flex justify-center  items-center flex-col'>
                <div className=''>
                    <img className='w-80 h-80 object-cover' src={about} alt="" />
                </div>
                <div className='flex  justify-center items-center flex-col'>
                    <h1 className='md:text-[65px] text-3xl font-bold font-poppins text-[#FFFFFF]'>RAJIB RAJ</h1>
                 <p className='text-[#F5B711] text-[18px] font-semibold font-poppins mt-3'>MERN Stack Developer</p>
                </div>
            </div>
            <div>
                <h1 className='text-[#F5B711]  text-[35px] font-semibold mt-5'>ABOUT ME</h1>
                <p className='text-[18px] font-light text-slate-300 font-poppins mt-4'>I'm Rajib, a passionate JavaScript developer with expertise in the MERN Stack. I love exploring and implementing new web technologies to create innovative solutions. I'm always eager to learn and grow in the ever-evolving tech world."
                Let me know if you'd like any refinements!</p>
            </div>
           <Education/>
        </div>
    );
};

export default About;

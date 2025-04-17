import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='bg-[#111122]'>
            <Outlet/>
            
        </div>
    );
};

export default Main;
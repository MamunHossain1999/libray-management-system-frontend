import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className='container mx-auto border '>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;
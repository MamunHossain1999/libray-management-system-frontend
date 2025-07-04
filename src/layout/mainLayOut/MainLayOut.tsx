import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className=' '>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;
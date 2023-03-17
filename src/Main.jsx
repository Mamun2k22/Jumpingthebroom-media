import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './pages/footer/Footer';
import Navbar from './pages/home/Navbar';

const Main = (() => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    );
});

export default Main;
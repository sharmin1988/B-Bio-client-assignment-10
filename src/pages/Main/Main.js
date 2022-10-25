import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-cover mt-6 lg:flex'>
                <div className='lg:w-1/4 bg-red-100'>
                    <RightSideNav></RightSideNav>
                </div>
                <div className='lg:w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
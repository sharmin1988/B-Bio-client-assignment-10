import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import RightSideNav from '../Shared/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div style={{backgroundImage: 'url(https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?size=626&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph)' }} className='bg-cover lg:flex'>
                <div className='lg:w-3/4'>
                    <Outlet></Outlet>
                </div>
                <div className='lg:w-1/4'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
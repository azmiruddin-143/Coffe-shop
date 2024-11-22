import React from 'react';
import Header from '../Header component/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer Componet/Footer';

const Store = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Store;
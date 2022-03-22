import React from 'react';
import Header from "./Home/Header";
import Content from "./Content/Content";
import Footer from './Home/Footer'
import {Route, Routes} from 'react-router-dom'

const ContentBox = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Content/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default ContentBox;
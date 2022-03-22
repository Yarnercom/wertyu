import React from 'react';
import FirstPage from "../section/FirstPage/FirstPage";
import Directions from "../section/Directions/Directions";
import Diploma from "../section/Diploma/Diploma";
import Reviews from "../section/Reviews/Reviews";
import EducationMobile from "../section/EducationMobile/EducationMobile";
import University from "../section/university/University";


const Content = () => {
    return (
        <>
            <FirstPage/>
            <University/>
            <Directions/>
            <Diploma/>
            <Reviews/>
            <EducationMobile/>
        </>
    );
};

export default Content;
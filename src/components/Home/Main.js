import React from 'react';
import FirstPage from "../section/FirstPage/FirstPage";
import University from "../section/university/University";
import Directions from "../section/Directions/Directions";
import Diploma from "../section/Diploma/Diploma";
import Reviews from "../section/Reviews/Reviews";
import EducationMobile from "../section/EducationMobile/EducationMobile";

const Main = () => {
    return (
        <section>
            <FirstPage/>
            <University/>
            <Directions/>
            <Diploma/>
            <Reviews/>
            <EducationMobile/>
        </section>
    );
};

export default Main;
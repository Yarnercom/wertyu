import React from 'react';
import MMA from './../../../assets/university/mma.png';
import Business from './../../../assets/university/business.png';
import MEI from './../../../assets/university/mei.png';
import MoscowW from './../../../assets/university/moscowWitte.png';
import National from './../../../assets/university/national.png';
import Tula from './../../../assets/university/tula.png';
import './Univer.css'

const University = () => {
    return (
        <section className='univer'>
            <div className='univer__container'>
                <img src={MoscowW} alt="moscow"/>
                <img src={Tula} alt="tula"/>
                <img src={MEI} alt="mei"/>
                <img src={National} alt="national"/>
                <img src={MMA} alt="mma"/>
                <img src={National} alt="national"/>
                <img src={MMA} alt="mma"/>
                <img src={Business} alt="business"/>
            </div>
        </section>
    );
};

export default University;
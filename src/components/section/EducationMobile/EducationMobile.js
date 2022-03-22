import React from 'react';
import './EducationMobile.css'
import {Link, Routes, Route} from 'react-router-dom'
import Mobile from './../../../assets/card/учиться с телефна-1.png'
import Check from './../../../assets/card/учиться с телефна.png'


const EducationMobile = () => {
    return (
        <section className='edMob'>
            <div className='container'>
                <div className='edMob__container'>
                    <div className='edMob__left'>
                        <h2 className='edMob__title'>Поступайте —
                            быстро и без
                            нервов</h2>
                        <p className='edMob__subtitle'>Вступительные по результатам ЕГЭ или
                            онлайн-тестам. Ведём набор круглый год.</p>
                        <Link to='/enroll'>
                            <button className='edMob__btn'>Схема поступления</button>
                        </Link>
                    </div>
                    <div className='edMob__right'>
                        <img className='edMob__img' src={Check} alt="check"/>
                    </div>
                </div>
                <div className='edMob__container2'>
                    <div className='edMob__right'>
                        <img src={Mobile} alt="mobile"/>
                    </div>
                    <div className='edMob__left'>
                        <h2 className='edMob__title'>Учитесь —
                            где и когда
                            хотите</h2>
                        <p className='edMob__subtitle'>Учёба полностью онлайн: от вступительных
                            тестов до самой защиты. Для занятий достаточно смартфона, планшета или ноутбука.</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default EducationMobile;
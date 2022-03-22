import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Tourism from './../../assets/direction/Туризм.svg'
import Jurisprudence from './../../assets/direction/юриспруденция.svg'
import Economy from './../../assets/direction/экономика.svg'
import Journalism from './../../assets/direction/Журналистика.svg'
import Medical from './../../assets/direction/Медицинская оптика.svg'
import Public from './../../assets/direction/Реклама и связи с общественностью.svg'

const Higher = () => {



    return (
        <section>
            <div className='directions__cards'>
                <div className='directions__cards-list tourism'>
                    <p className='directions__cards-title'>Туризм</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Tourism} alt="Pages"/>
                    <Link to='/pages' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
                <div className='directions__cards-list jurisprudence'>
                    <p className='directions__cards-title'>Юриспруденция</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Jurisprudence} alt="Jurisprudence"/>
                    <Link to='/Jurisprudence' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
                <div className='directions__cards-list economy'>
                    <p className='directions__cards-title'>Экономика</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Economy} alt="Economy"/>
                    <Link to='/Economy' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
                <div className='directions__cards-list journalism'>
                    <p className='directions__cards-title'>Журналистика</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Journalism} alt="Journalism"/>
                    <Link to='/Journalism' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
                <div className='directions__cards-list medical'>
                    <p className='directions__cards-title'>Медицинская оптика</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Medical} alt="Medical"/>
                    <Link to='/MedicalOptics' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
                <div className='directions__cards-list public'>
                    <p className='directions__cards-title'>Реклама и связи с общественностью</p>
                    <p className='directions__cards-subtitle'>• от 12 500 ₽ семестр</p>
                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                    <img className='directions__cards-img' src={Public} alt="Public"/>
                    <Link to='/AdvertisingAndPublicRelations' className='directions__cards-btn'><span>...</span>консультация</Link>
                </div>
            </div>
        </section>
    );
};

export default Higher;
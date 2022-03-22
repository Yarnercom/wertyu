import React from 'react';
import Mba from './../../assets/direction/Master of Business Administration (MBA).svg'
import Agronomy from './../../assets/direction/Агрономия.svg'
import Design from './../../assets/direction/Архитектура и дизайн.svg'
import Accounting from './../../assets/direction/Бухгалтерское дело.svg'
import OccupationalSafety from './../../assets/direction/Охрана труда. Специальная оценка условий труда (СОУТ).svg'
import './Routes.css'

const Ape = () => {
    return (
        <section className='ape'>
            <div className='container'>
                <div className='ape__container'>
                    <form className='ape__form'>
                        <label>
                            <input className='ape__form-input' type="text"/>
                        </label>
                    </form>
                    <div className='ape__direction'>
                        <div className='ape__direction-content'>
                            <img src={Mba} alt="mba"/>
                            <p className='ape__direction-title'>Master of Business Administration <br/> (MBA)</p>
                        </div>
                        <div className='ape__direction-price'>
                            <p className='ape__direction-subtitle'>
                                • от 254 часов  ~2 дня <br/>
                                • от 50 000 ₽
                            </p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='ape__direction'>
                        <div className='ape__direction-content'>
                            <img src={Agronomy} alt="Agronomy"/>
                            <p className='ape__direction-title'>Агрономия</p>
                        </div>
                        <div className='ape__direction-price'>
                            <p className='ape__direction-subtitle'>
                                • от 254 часов  ~2 дня <br/>
                                • от 50 000 ₽
                            </p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='ape__direction'>
                        <div className='ape__direction-content'>
                            <img src={Design} alt="Design"/>
                            <p className='ape__direction-title'>Архитектура и дизайн</p>
                        </div>
                        <div className='ape__direction-price'>
                            <p className='ape__direction-subtitle'>
                                • от 254 часов  ~2 дня <br/>
                                • от 50 000 ₽
                            </p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='ape__direction'>
                        <div className='ape__direction-content'>
                            <img src={Accounting} alt="Accounting"/>
                            <p className='ape__direction-title'>Бухгалтерское дело</p>
                        </div>
                        <div className='ape__direction-price'>
                            <p className='ape__direction-subtitle'>
                                • от 254 часов  ~2 дня <br/>
                                • от 50 000 ₽
                            </p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='ape__direction'>
                        <div className='ape__direction-content'>
                            <img src={OccupationalSafety} alt="OccupationalSafety"/>
                            <p className='ape__direction-title'>Охрана труда. Специальная <br/> оценка условий труда</p>
                        </div>
                        <div className='ape__direction-price'>
                            <p className='ape__direction-subtitle'>
                                • от 254 часов  ~2 дня <br/>
                                • от 50 000 ₽
                            </p>
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
        </section>
    );
};

export default Ape;
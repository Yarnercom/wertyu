import React, {useState} from 'react';
import './FirstPage.css'
import City from './../../../assets/picture/City.png'
import {CSSTransition} from 'react-transition-group'
import Card from "../../Home/card/Card";
import Telegram from "../../../assets/icon/telegram.svg";
import Whats from "../../../assets/icon/whatsapp.svg";
import Vk from "../../../assets/icon/vk.svg";


const FirstPage = () => {

    const [active, setActive] = useState(false);


    return (
        <section className='firstPage'>
            <div className='container'>
                <div className='firstPage__container'>
                    <div className='firstPage__education'>
                        <h2 className='firstPage__education-title'>Образование <br/>
                            онлайн в Нижнем <br/>
                            Новгороде</h2>
                        <div className='firstPage__education-pos'>


                            <p onClick={()=> setActive(!active)} className='firstPage__education-share'>Контакты</p>
                            <CSSTransition in={active} classNames='alert' timeout={300} unmountOnExit>

                                <ul className={`${active ? ' share__active' : ''} share__body`}>
                                    <li className='share__bodyText'>
                                        <h3 className='share__title'>Поделиться:</h3>
                                        <span className='share__cross' onClick={()=> setActive(!active)}> </span>
                                    </li>
                                    <li className='share__bodyLink'>
                                        <a target='_blank' href="https://t.me/buggynice"><img src={Telegram} alt='telegram' className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Whats} alt='whats' className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Vk} alt='vk' className='share__link'/></a>
                                    </li>
                                </ul>

                            </CSSTransition>

                        </div>
                        <p className='firstPage__education-subtitle'>Мы — единая приёмная комиссия вузов
                            и колледжей по дистанционным программам обучения</p>
                        <p className='firstPage__education-price'>• от 12 500 ₽ семестр • от 2,5 лет • 100% онлайн</p>
                        <img className='firstPage__education-city' src={City} alt="city"/>
                    </div>
                    <div className='firstPage__order'>
                        <Card/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstPage;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Routes.css'
import './../allStyle.css'
import './../section/FirstPage/FirstPage.css'
import Card from "../Home/card/Card";
import Share from "../../assets/icon/share.svg";
import {CSSTransition} from "react-transition-group";
import Telegram from "../../assets/icon/telegram.svg";
import Whats from "../../assets/icon/whatsapp.svg";
import Vk from "../../assets/icon/vk.svg";
import Static from './../../assets/direction/Иконки статика.png'
import Btns from "../Home/btns/Btns";


const Enroll = () => {


    const [all, setAll] = useState([]);


    useEffect(() => {
        axios('http://localhost:8080/mainTitle')
            .then(({data}) => setAll(Object.values(data)))
    }, []);


    const [active, setActive] = useState(false);


    return (
        <section className='enroll'>
            <div className='container'>
                <Btns/>
                <div className='enroll__container'>

                    <div className='enroll__first'>

                        <h3 className='enroll__title'>Как поступить — пошаговая инструкция</h3>
                        <img className='enroll__icon' src={Static} alt="static"/>
                        <div className='firstPage__education-pos'>

                            <img onClick={() => setActive(!active)} className='firstPage__education-share1' src={Share}
                                 alt="share"/>
                            <CSSTransition in={active} classNames='alert' timeout={300} unmountOnExit>

                                <ul className={`${active ? ' share__active' : ''} share__body`}>
                                    <li className='share__bodyText'>
                                        <h3 className='share__title'>Поделиться:</h3>
                                        <span className='share__cross' onClick={() => setActive(!active)}> </span>
                                    </li>
                                    <li className='share__bodyLink'>
                                        <a target='_blank' href="https://t.me/buggynice"><img src={Telegram}
                                                                                              alt='telegram'
                                                                                              className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Whats} alt='whats'
                                                                         className='share__link'/></a>
                                        <a target='_blank' href="#"><img src={Vk} alt='vk' className='share__link'/></a>
                                    </li>
                                </ul>

                            </CSSTransition>


                        </div>
                    </div>
                    <div className='firstPage__order'>
                        <Card/>
                    </div>
                </div>
                <ul children='indi__body'>
                    <li className='indi__list'>Шаг 1: Выберите направление и учебное заведение</li>
                    <li className='indi__list'>Шаг 2: Отправляете нам необходимые документы — достаточно фото на телефон</li>
                    <li className='indi__list'>Шаг 3: Проходите вступительный тест онлайн или предоставляете результаты ЕГЭ</li>
                    <li className='indi__list'>Шаг 4: Оплачиваете обучение или оофрмляете рассрочку</li>
                </ul>


            </div>
        </section>
    );
};

export default Enroll;
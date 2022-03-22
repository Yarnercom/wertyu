import React, {useState} from 'react';
import Vk from './../../assets/icon/vk.svg';
import Instagram from './../../assets/icon/instagram.svg';
import Wats from './../../assets/icon/whatsapp.svg';
import Logo from './../../assets/logo/logoFirst.png'
import Telegram from './../../assets/icon/telegram.svg'
import {Link, Routes, Route} from "react-router-dom";
import Direction from "../routes/Filter/Direction";
import './Home.css'
import Universities from "../routes/Filter/Universities";
import College from "../routes/Filter/College";
import Reviews from "../routes/Filter/Reviews";
import LeaveFeedback from "../routes/Filter/RouteContent/LeaveFeedback";
import Institutions from "../routes/Filter/Institutions";
import Question from "../routes/Filter/Question";
import Professions from "../routes/Filter/Professions";
import Pages from "../routes/ Pages/Pages";
import Jurisprudence from "../routes/ Pages/Jurisprudence";
import Economy from "../routes/ Pages/Economy";
import Journalism from "../routes/ Pages/Journalism";
import MedicalOptics from "../routes/ Pages/MedicalOptics";
import AdvertisingAndPublicRelations from "../routes/ Pages/AdvertisingAndPublicRelations";
import Enroll from "../routes/Enroll";
import './../../media/media.css'



const Header = () => {


    const [burger, setBurger] = useState('open');


    return (
        <header className='header'>
            <div className='container'>
                <div className='header__container'>
                    <h1 className='header__title'>
                        <Link to='/'>
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </h1>
                    <div className='header__right'>
                        <div className='header__social'>
                            <img className='header__social-icon' src={Vk} alt="vk"/>
                            <img className='header__social-icon' src={Instagram} alt="instagram"/>
                            <img className='header__social-icon' src={Wats} alt="wats"/>
                        </div>
                        <div className="section">
                            <p onClick={()=> setBurger(burger === 'open' ? 'close' : 'open')} className="menu-btn">
                                <span className="span"> </span>
                            </p>
                        </div>

                    </div>
                </div>
                    <ul className={`${burger} header__navbar`}>
                        <li>
                            <Link className='header__navbar-list' to="/direction">Направления</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/universities">Вузы</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/collage">Колледжи</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/professions">Профессии</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/leaveFeedback">Отзывы</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/question">Вопрос-ответ</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/enroll">Как поступить</Link>
                        </li>
                        <li>
                            <Link className='header__navbar-list' to="/institutions">Учебным заведениям</Link>
                        </li>
                        <li>
                            <a href='#popup' className='header__navbar-list'>Контакты</a>
                        </li>
                    </ul>
            </div>
            <div id='popup' className='contact'>
                <a href="#" className='contact__area'> </a>
                <div className='contact__body'>
                    <div className='contact__content'>
                        <a className='contact__close' href="#">x</a>
                        <p className='contact__title'>Контакты</p>
                        <div className='contact__box'>
                            <img src={Wats} alt="Wats"/>
                            <img src={Instagram} alt="Instagram"/>
                            <img src={Telegram} alt="Telegram"/>
                        </div>
                        <div className='contact__box1'>
                            <p className='contact__text'>Единая приёмная комиссия дистанционных вузов и колледжей России</p>
                            <a className='contact__tel' href="#">+7 (902) 311 36 64</a>
                            <p className='contact__time'>пн — пт с 9.00 до 19.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/direction' element={<Direction/>}/>
                <Route path='/universities' element={<Universities/>}/>
                <Route path='/collage' element={<College/>}/>
                <Route path='/leaveFeedback/*' element={<LeaveFeedback/>}>
                    <Route path='reviews' element={<Reviews/>}/>
                </Route>
                <Route path='/institutions' element={<Institutions/>}/>
                <Route path='/question' element={<Question/>}/>
                <Route path='/enroll' element={<Enroll/>}/>
                <Route path='/professions' element={<Professions/>}/>
                <Route path='/pages' element={<Pages/>}/>
                <Route path='/Jurisprudence' element={<Jurisprudence/>}/>
                <Route path='/Economy' element={<Economy/>}/>
                <Route path='/Journalism' element={<Journalism/>}/>
                <Route path='/MedicalOptics' element={<MedicalOptics/>}/>
                <Route path='/AdvertisingAndPublicRelations' element={<AdvertisingAndPublicRelations/>}/>
            </Routes>
        </header>
    );
};

export default Header;
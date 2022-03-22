import React from 'react';
import Btns from "../../Home/btns/Btns";
import Animation from './../../../assets/professions/Ellipse 262.png'
import kaspersky from './../../../assets/professions/Ellipse 262-3.png'
import analyst from './../../../assets/professions/Ellipse 262-2.png'
import systems from './../../../assets/professions/Ellipse 262-4.png'
import cloud from './../../../assets/professions/Ellipse 262-5.png'

const Professions = () => {
    return (
        <div className='container'>
            <Btns/>
            <h3 className='profList__title'>Профессии в Санкт-Петербурге</h3>
            <p className='profList__subtitle'>Кого ищут в Санкт-Петербурге, на кого пойти учиться — полный список профессий</p>
            <ul className='profList'>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={Animation} alt="Animation"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={kaspersky} alt="kaspersky"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={analyst} alt="analyst"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={systems} alt="systems"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={cloud} alt="cloud"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
                <li className='profList-item'>
                    <div className='profListBlock'>
                        <img src={Animation} alt="Animation"/>
                        <div className='profListMini'>
                            <p className='profList__btn'>востребованная</p>
                            <p className='profList__direction'>3D-аниматор</p>
                        </div>
                    </div>
                    <p className='profList__text'>	• от 50 000 ₽ зарплата <br/>
                        • от 12 500 ₽ семестр обучения</p>
                </li>
            </ul>
        </div>
    );
};

export default Professions;
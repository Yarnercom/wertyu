import React from 'react';
import './Reviews.css'
import Anton from './../../../assets/avatar/Anton.svg'
import Alexander from './../../../assets/avatar/Alexander.svg'
import Vasiliy from './../../../assets/avatar/Vasiliy.svg'
import Vk from './../../../assets/icon/vk.svg'
import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Reviews = () => {
    return (
        <section className='reviews'>
            <div className='container'>
                <div className='reviews__container'>
                    <h2 className='reviews__title'>Отзывы реальных студентов</h2>
                    <div className='reviews__row'>

                    </div>
                    <Swiper
                        modules={[]}
                        spaceBetween={30}
                        slidesPerView={2}
                        Thumbs={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Anton} alt="Anton"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Антон Пабаловец</p>
                                        <p className='reviews__row-block_university'>Московский экономический институт</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Alexander} alt="Alexander"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Александр Никоноров</p>
                                        <p className='reviews__row-block_university'>Тульский государственный университет</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Vasiliy} alt="Vasiliy"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Василий Скворцов</p>
                                        <p className='reviews__row-block_university'>Московский экономический институт</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Vasiliy} alt="Vasiliy"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Василий Скворцов</p>
                                        <p className='reviews__row-block_university'>Московский экономический институт</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Vasiliy} alt="Vasiliy"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Василий Скворцов</p>
                                        <p className='reviews__row-block_university'>Московский экономический институт</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='reviews__row-list'>
                                <p className='reviews__row-comment'>Мне за время учебы удалось почувствовать себя сотрудником на удаленке. Отпуск в тайланд
                                    совпал со вторым сборным проектом. Ох эта атмосфера! Бассейн, солнце, манго, ноутбук с
                                    проектом, Марина Левушкина, напоминающая о дедлайне)))! <br/><br/>
                                    Вспоминаю это все с восторгом! Оказалось, работать на удаленке не так то и просто!)</p>
                                <div className='reviews__row-massage'>
                                    <div className='reviews__row-selection'>
                                        <img className='reviews__row-avatar' src={Vasiliy} alt="Vasiliy"/>
                                        <img className='reviews__row-vk' src={Vk} alt="vk"/>
                                    </div>
                                    <div className='reviews__row-block'>
                                        <p className='reviews__row-block_name'>Василий Скворцов</p>
                                        <p className='reviews__row-block_university'>Московский экономический институт</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
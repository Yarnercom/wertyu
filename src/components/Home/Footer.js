import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import './Home.css'
import './../routes/Filter/general.css'
import Avatar from './../../assets/avatar/avatar.svg'
import Vk from './../../assets/icon/vk.svg'
import Inst from './../../assets/icon/instagram.svg'
import Whats from './../../assets/icon/whatsapp.svg'
import Logo from './../../assets/logo/desktop.svg'
import axios from "axios";


const Footer = () => {


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
    });



    const [select, setSelect] = useState('');

    const toggle = (i) => {
        if (select === i) {
            return setSelect('')
        }

        setSelect(i)
    };

    const data = [
        {
            question: 'Где учиться по удаленной специальности?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Как проходит дистанционное обучение?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Какой документ об образовании выдается после\n' +
                '                                дистанционной учебы\n' +
                '                                в колледже или вузе?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        },
        {
            question: 'Я решил поступать. Что дальше делать?',
            answer: 'Зачеты и экзамены проходят в виде тестов внутри электронного кабинета по расписанию. Тесты открытые, закрытые, с вариантами, иногда нужно решить задачу или написать эссе. Есть три попытки, можно выбрать лучший результат. Время каждой попытки ограничено, обычно от 30 до 45 минут на тест.'
        }
    ];


    const [review, setReview] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/question')
            .then(({data})=> setReview(data))
    },[]);

    const addReview = (e) =>{
        e.preventDefault();
        axios.post('https://formsubmit.co/arsdoroev@gmail.com', {
            name: e.target[0].value,
            tel: e.target[1].value,
            question: e.target[2].value
        }).then(({data})=> {
            console.log(data);
                e.target[0].value = '';
                e.target[1].value = '';
                e.target[2].value = '';
        });
    };


    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__container'>
                    <div className='footer__form'>
                        <div className='footer__form-list1'>
                            <h3 className='footer__form-questions'>Вопрос-ответ:</h3>
                            <p className='footer__form-subtitle'>Мы отобрали вопросы, которые задают <br/> нашим
                                менеджерам каждый день </p>
                        </div>
                        {
                            data.map((item, i)=>(
                                <div key={item.question} className='footer__form-list'>
                                    <div className='footer__form-toggle' onClick={()=> toggle(i)}>
                                        <h3 className='footer__form-title'>{item.question}</h3>
                                        <span className={`${select === i ? 'eks' : 'plus'} footer__form-plus`}> </span>
                                    </div>
                                    <div className={`${select === i ? 'content show' : 'content'} footer__form-answer`}>{item.answer}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='footer__questions'>
                        <div className='footer__questions-item'>
                            <h3 className='footer__questions-title'>Ещё <br/>
                                вопросы?</h3>
                            <p className='footer__questions-subtitle'>Задайте их и наш менеджер <br/> свяжется с Вами в
                                течение <br/>
                                15 минут</p>
                            <div className='footer__questions-block'>
                                <img className='footer__questions-block_avatar' src={Avatar} alt="avatar"/>
                                <p className='footer__questions-block_text'>Вам ответит Анастасия —
                                    Ваш <br/> персональный менеджер</p>
                            </div>
                        </div>

{/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
                        <form autoComplete='off' action="https://formsubmit.co/arsdoroev@gmail.com" method='POST' className='footer__questions-form'>
                             <div>
                                 <label>

                                     {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
                                     <p className='footer__questions-form_title'>Как Вас зовут?</p>
                                     <input name='name' placeholder='Ваше имя' className='footer__questions-form_input' type="text"
                                            {...register('name', {
                                                required: "Поле обязательно к заполнению!",
                                                maxLength: {
                                                    value: 20,
                                                    message: 'максимум 20 символов!'
                                                }
                                            })}
                                     />
                                     <div style={{height: 40}}>{errors?.name && <p className='form__error'>{errors?.name?.message || "Error!"}</p>}</div>
                                     {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}

                                     <p className='footer__questions-form_title'>Ваш телефон</p>
                                     <input name='tel' placeholder='+7 (000) 000 00 00' className='footer__questions-form_tel'
                                            type="tel"
                                            {...register('tel', {
                                                required: "Поле обязательно к заполнению!",
                                                minLength: {
                                                    value: 10,
                                                    message: 'минимум 10 цифр!'
                                                }
                                            })}
                                     />
                                     <div style={{height: 40}}>{errors?.tel && <p className='form__error'>{errors?.tel?.message || "Error!"}</p>}</div>
                                     {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}

                                 </label>
                                 <p className='footer__questions-form_text'>Нажимая кнопку “Задать вопрос”,
                                     Вы <br/> соглашаетесь с условиями обработки <br/> персональных данных</p>
                             </div>
                            <div className='footer__questions-operator'>
                                <label className='footer__questions-operator_block'>
                                    <p className='footer__questions-operator_title'>Напишите свои вопросы:</p>
                                    <textarea name='question1' className='footer__questions-operator_text'
                                              placeholder='Вы можете задать несколько вопросов'
                                              {...register('question1', {
                                                  required: "Поле обязательно к заполнению!",
                                                  maxLength: {
                                                      value: 250,
                                                      message: 'максимум 250 символов!'
                                                  }
                                              })}
                                    >
                                </textarea>
                                    <div style={{height: 40}}>{errors?.question1 && <p className='form__error'>{errors?.question1.message || "Error!"}</p>}</div>
                                    <button className='footer__questions-operator_btn' type='submit'>Задать вопрос</button>
                                </label>

                            </div>
                        </form>

{/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
                    </div>

                    <div className='footer__basement'>
                        <div className='footer__basement-col'>
                            <img className='footer__basement-logo' src={Logo} alt="logo"/>
                            <p className='footer__basement-program'>Единая приёмная комиссия вузов <br/> и колледжей по
                                дистанционным <br/>
                                программам</p>
                            <p className='footer__basement-agreement'>Политика конфиденциальности</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Направления</p>
                            <p className='footer__basement-title'>Вузы</p>
                            <p className='footer__basement-title'>Колледжи</p>
                            <p className='footer__basement-title'>Профессии</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Как поступить</p>
                            <p className='footer__basement-title'>Отзывы</p>
                            <p className='footer__basement-title'>Вопрос-ответ</p>
                            <p className='footer__basement-title'>Полезные статьи</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-title'>Партнёрам</p>
                            <p className='footer__basement-title'>Шансы по ЕГЭ</p>
                            <p className='footer__basement-title'>Контакты</p>
                            <p className='footer__basement-title'>Подать документы</p>
                        </div>
                        <div className='footer__basement-col'>
                            <p className='footer__basement-tel'>+7 (902) 311 36 64</p>
                            <p className='footer__basement-workTime'>Рабочее время: <br/>
                                Пн — Пт с 9.00 до 19.00</p>
                            <div className='footer__basement-icon'>
                                <img src={Vk} alt="vk"/>
                                <img src={Inst} alt="instagram"/>
                                <img src={Whats} alt="whats"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer__selection'>
                <p className='footer__selection-btn'>Подобрать обучение</p>
                <div className='footer__selection-circle'> </div>
            </div>
        </footer>

    );
};

export default Footer;

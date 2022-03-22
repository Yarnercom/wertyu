import React, {useState, useEffect} from 'react';
import './../../section/FirstPage/FirstPage.css'
import {useForm} from "react-hook-form";
import axios from "axios";
import './../../../media/media.css'
const Card = () => {

    const [page, setPage] = useState(1);

    function goNextPage() {
        if (page === 4) return;
        setPage((page) => page + 1);
        setNum((num) => num < 3 ? num + 1 : 3);
        setNum1((num1) => num1 < 4 ? num1 + 1 : '')
    }

    const [num, setNum] = useState(1);
    const [num1, setNum1] = useState(2);


    const [choose, setChoose] = useState('');

    const step1 = [
        {
            id: 0,
            title: '9 классов'
        },
        {
            id: 1,
            title: '11 классов'
        },
        {
            id: 2,
            title: 'Училище'
        },
        {
            id: 3,
            title: 'Колледж'
        },
        {
            id: 4,
            title: 'Техникум'
        },
        {
            id: 5,
            title: 'Неоконченное высшее'
        },
        {
            id: 6,
            title: 'Высшее'
        }
    ];

    const [choose1, setChoose1] = useState('');

    const step2 = [
        {
            id: 0,
            title: 'Я не знаю'
        },
        {
            id: 1,
            title: 'Гуманитарная'
        },
        {
            id: 2,
            title: 'Техническая'
        },
        {
            id: 3,
            title: 'Педагогическая'
        }
    ];


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onSubmit",
    });

    const [review, setReview] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/question')
            .then(({data})=> setReview(data))
    },[]);

    const addReview = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/partner', {
            name: e.target[0].value,
            tel: e.target[1].value,
            email: e.target[2].value
        }).then(({data})=> {
            console.log(data);
            e.target[0].value = '';
            e.target[1].value = '';
            e.target[2].value = '';
        })
    };


    return (
        <div className='card'>
            <div className='firstPage__order-dFlex'>
                <p className='firstPage__order-title'>Подобрать обучение</p>
                <span className='firstPage__order-frac'>{num}/3</span>
            </div>
            <p className='firstPage__order-subtitle'>Какое у Вас образование?</p>
            <form autoComplete='off' className='formBody' method='POST' action="https://formsubmit.co/arsdoroev@gmail.com">
            <ul className='firstPage__order-navbar'>
                {page === 1 && [
                    step1.map((item) => (
                        <li key={item.id}
                            className={`${choose === item.id ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}
                            onClick={() => setChoose(item.id)}>{item.title}</li>
                    ))
                ]}
                {page === 2 && [
                    step2.map((item) => (
                           <li key={item.id}
                               className={`${choose1 === item.id ? 'firstPage__order-navbar_list-active' : ''} firstPage__order-navbar_list`}
                               onClick={() => setChoose1(item.id)}>{item.title}</li>
                    ))
                ]}
                {
                    page === 3 ?

                           <div>
                               <label className='fix'>
                                   <div style={{height: 10}}>{errors?.name && <p className='form__error1'>{errors?.name?.message || "Error!"}</p>}</div>
                                   <input required name='name' className='formInput' type="text" placeholder='Имя'
                                          {...register('name', {
                                              required: "-",
                                              maxLength: {
                                                  value: 20,
                                                  message: '-'
                                              }
                                          })}
                                   />
                               </label>
                               <label className='fix'>
                                   <input required name='tel' className='formInput' type="tel" placeholder='Телефон'
                                          {...register('tel', {
                                              required: "-",
                                              maxLength: {
                                                  value: 11,
                                                  message: '-'
                                              }
                                          })}
                                   />
                               </label>
                               <label className='fix'>
                                   <div style={{height: 10}}>{errors?.email && <p className='form__error1'>{errors?.email?.message || "Error!"}</p>}</div>
                                   <input required name='email' className='formInput' type="email" placeholder='E-mail'
                                          {...register('email', {
                                              required: "-",
                                              minLength: {
                                                  value: 9,
                                                  message: '-'
                                              }
                                          })}
                                   />
                               </label>
                           </div>

                        : ''
                }
            </ul>
            <div className='firstPage__order-block'>

                { num1 !== 4 ?
                    <button
                        className={`${choose !== choose1 ? 'firstPage__order-btn_active' : ''} firstPage__order-btn`}
                        onClick={goNextPage} type='button'>К шагу {num1} из 3
                    </button>
                    :
                    <button type='submit' className='firstPage__order-btn_active formBtn'>Отправить заявку</button>
                }
            </div>
            </form>
        </div>
    );
};

export default Card;
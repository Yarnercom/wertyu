import React, {useEffect, useState} from 'react';
import Vitte from './../../../assets/picture/universites/vitte.png'
import {useForm} from 'react-hook-form'
import axios from "axios";
import './../../allStyle.css'
import first from './../../../assets/picture/universites/1.png'
import second from './../../../assets/picture/universites/2.png'
import third from './../../../assets/picture/universites/3.png'
import Btns from "../../Home/btns/Btns";

const Reviews = () => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onSubmit",
    });


    const [review, setReview] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/review')
            .then(({data})=> setReview(data))
    },[]);

    const addReview1 = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/review', {
            name: e.target[0].value,
            review: e.target[1].value,
        }).then(({data})=> {
            e.target[0].value = '';
            e.target[1].value = '';
        })
    };

    return (
        <section className='review'>
            <div className='container'>
                <h3 className='review__title'>Оставить отзыв</h3>
                <p className='review__subtitle'>Здесь Вы можете пожаловаться на свой вуз, похвалить его или просто рассказать о нем. Тысячи абитуриентов <br/>
                    очень ждут информации о вузах изнутри. Заранее благодарим Вас!</p>

               <div className='body__review'>
                   <div className='review__bodyEdit'>
                       <div className='review__bodyEdit-flex'>
                           <img src={third} alt="third"/>
                           <p className='review__bodyEdit-title'>ВГЛУ имени Г. Ф. Морозова</p>
                       </div>
                       <button className='review__bodyEdit-btn'>Изменить</button>
                   </div>
                   <form autoComplete='off' className='formReview' action='http://localhost:8080/review' method='POST' onSubmit={addReview1}>
                       <label className='formReview__label'>
                           <p className='formReview__text'>Как Вас зовут?</p>
                           <input
                               required
                               className='formReview__input'
                               name='name'
                               type="text"
                                placeholder='Ваше имя'
                               {...register('name', {
                                   required: "Поле обязательно к заполнению!",
                                   maxLength: {
                                       value: 20,
                                       message: 'максимум 20 символов!'
                                   }
                               })}
                           />
                           <div style={{height: 40}}>{errors?.name && <p className='form__error'>{errors?.name?.message || "Error!"}</p>}</div>
                       </label>
                       <label className='formReview__label'>
                           <p className='formReview__text'>Напишите свой отзыв:</p>
                           <textarea
                               required
                               className='formReview__textarea'
                               name="review"
                               placeholder='Опишите Ваш опыт обучения, что понравилось, что было плохо'
                               {...register('review', {
                                   required: "Поле обязательно к заполнению!",
                                   maxLength: {
                                       value: 150,
                                       message: 'максимум 150 символов!'
                                   }
                               })}
                           >
                           </textarea>
                           <div style={{height: 40}}>{errors?.review && <p className='form__error'>{errors?.review?.message || "Error!"}</p>}</div>
                       </label>
                       <button type='submit' className='formReview__btn'>Отправить отзыв</button>
                   </form>
               </div>
            </div>
        </section>
    );
};

export default Reviews;
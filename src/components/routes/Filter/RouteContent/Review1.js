import React, {useEffect, useState} from 'react';
import './../Filter.css'
import Vitte from './../../../../assets/picture/universites/vitte.png'
import first from './../../../../assets/picture/universites/1.png'
import second from './../../../../assets/picture/universites/2.png'
import third from './../../../../assets/picture/universites/3.png'
import Git from './../../../../assets/avatar/github.png'
import {Link} from 'react-router-dom'
import axios from "axios";

const Review1 = () => {


    const [review, setReview] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/review')
            .then(({data})=> setReview(data))
    },[]);


    return (
        <section className='review1'>
            <div className='container'>
                <h3 className='review1__title'>
                    Отзывы
                </h3>
                <p className='review1__subtitle'>
                    Все студенты оставившие отзывы — настоящие, вы можете написать им в соцсетях и задать вопросы.
                </p>

               <div className='review1__bodyContent'>
                   <div className='review1__left'>
                       <div className='review1__left-flex'>
                           <img src={Vitte} alt="vitte"/>
                           <p>Московский Университет имени С.Ю. Витте</p>
                       </div>
                       <div className='review1__left-flex'>
                           <img src={first} alt="first"/>
                           <p>Тульский государственный университет</p>
                       </div>
                       <div className='review1__left-flex'>
                           <img src={second} alt="second"/>
                           <p>Московский экономический институт</p>
                       </div>
                       <div className='review1__left-flex'>
                           <img src={third} alt="third"/>
                           <p>ВГЛУ имени Г. Ф. Морозова</p>
                       </div>
                   </div>
                   <div className='review1__right'>
                       {
                           review.map((item)=>(
                               <div key={item.id} className='review1__rightBg'>
                                   <div className='review1__rightFlex'>
                                       <div className='review1__rightBodyAvatar'>
                                           <img src={Git} alt="Git"/>
                                           <div>
                                               <p className='review1__rightTitle'>{item.name}</p>
                                           </div>
                                       </div>
                                       <div className='review1__rightBodyBtn'>
                                           <Link className='review1__rightbtn' to='reviews'>...Добавить отзыв</Link>
                                       </div>
                                   </div>
                                   <p className='review1__comment'>{item.review}</p>
                               </div>
                           ))
                       }
                   </div>
               </div>
            </div>
        </section>
    );
};

export default Review1;
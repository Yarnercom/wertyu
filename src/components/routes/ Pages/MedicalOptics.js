import React, {useEffect, useState} from 'react';
import Economy from "../../../assets/direction/экономика.svg";
import Card from "../../Home/card/Card";
import axios from "axios";

const MedicalOptics = () => {

    const [page4, setPage4] = useState([]);

    useEffect(() => {
        axios('http://localhost:8080/MedicalOptics')
            .then(({data}) => setPage4(Object.values(data)))
    }, []);

    return (
        <div className='container'>
            <div className='flexHigher'>
                <ul className='HigherBg'>
                    {
                        page4.map((item, idx)=>(
                            <li className='pageCard' key={idx}>
                                <span className='pageCard__higher'>высшее онлайн-образование</span>
                                <p className='pageCard__title'>{item.title}</p>
                                <p className='pageCard__price'>от {item.price} ₽ семестр</p>
                                <p className='pageCard__date'>от {item.date} лет</p>
                                <span className='pageCard__higher pageCard__univer'>в 6 вузах</span>
                                <img className='pageCard__img' src={Economy} alt="economy"/>
                            </li>
                        ))
                    }
                </ul>
                <div className='firstPage__order'>
                    <Card/>
                </div>
            </div>
            <div>
                <p className='pageCard__text'>Освойте полный курс по психологии и станьте психотерапевтом, писателем <br/> профессиональным маркетологом или няней.</p>

                <div className='pageCard__bigBlock'>
                    <div className='pageCard__miniBlock'>
                        <div className='pageCard__element'>
                            <p className='pageCard__elementTitle'>Форма обучения</p>
                            <p className='pageCard__elementSubtitle'>Дистанционная</p>
                        </div>
                        <div className='pageCard__element'>
                            <p className='pageCard__elementTitle'>Сроки обучения *</p>
                            <p className='pageCard__elementSubtitle'>от 2,5 лет</p>
                        </div>
                    </div>
                    <div className='pageCard__miniBlock'>
                        <div className='pageCard__element'>
                            <p className='pageCard__elementTitle'>Стоимость обучения *</p>
                            <p className='pageCard__elementSubtitle'>от 12 500 ₽ семестр</p>
                        </div>
                        <div className='pageCard__element'>
                            <p className='pageCard__elementTitle'>Диплом</p>
                            <p className='pageCard__elementSubtitle'>Гособразца</p>
                        </div>
                    </div>
                    <p className='pageCard__comment'>*Зависит от выбранного учебного заведения и уровня образования</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalOptics;
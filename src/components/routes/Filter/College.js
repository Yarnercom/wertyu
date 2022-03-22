import React, {useEffect, useState} from 'react';
import Btns from "../../Home/btns/Btns";
import Title3 from "./RouteContent/Title/Title3";
import Search from "../../../assets/icon/search.svg";
import Economy from "../../../assets/direction/экономика.svg";
import axios from "axios";
import './../../allStyle.css'

const College = () => {

    const [search, setSearch] = useState("");

    const [search1, setSearch1] = useState("");


    const [all, setAll] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/college')
            .then(({data}) => setAll(Object.values(data)))
    }, []);


    const searchHandler = (e) =>{
        setSearch(search1);
        e.preventDefault();
    };

    return (
        <section className='universities'>
            <div className='container'>
                <Btns/>
                <Title3/>
                <form autoComplete='off' className='general__form' onSubmit={(e)=> searchHandler(e)}>
                    <label className='direction__label'>
                        <img className='direction__search' src={Search} alt="search"/>
                        <input onChange={(e)=> setSearch1(e.target.value)} className='direction__input' placeholder='Поиск по направлениям'
                               type="text"
                               name='search'
                        />
                    </label>
                </form>
                <ul className='direction__content-card'>

                    {
                        all.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((item, idx)=>(
                            <li key={idx} className='direction__content-card_item'>
                                <div className='directions__cards-list economy'>
                                    <p className='directions__cards-title'>{item.title}</p>
                                    <p className='directions__cards-subtitle'>• от {item.price} ₽ семестр</p>
                                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                    <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                    <button type='button' className='directions__cards-btn'><span>{item.colDirection} </span>{item.direction}</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className='routeContent__bodyMap'>
                    <h3 className='routeContent__bodyTitleMap'>Места в Санкт-Петербурге, <br/>
                        где можно поучиться:</h3>
                    <div className='routeContent__map'>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7bf7231a06aeb5fbd351174e9cc1bfad682307c3234a3514a7581dd22b8ddc26&amp;source=constructor"
                            width="1216" height="456" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default College;
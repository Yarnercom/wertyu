import React, {useEffect, useState} from 'react';
import Search from "../../../assets/icon/search.svg";
import axios from "axios";
import Economy from "../../../assets/direction/экономика.svg";
import Btns from "../../Home/btns/Btns";
import Title2 from "./RouteContent/Title/Title2";
import RouteContent from "./RouteContent/RouteContent";

const Universities = () => {

    const [search, setSearch] = useState("");

    const [search1, setSearch1] = useState("");


    const [all, setAll] = useState([]);

    useEffect(()=>{
        axios('http://localhost:8080/universities')
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
                <Title2/>
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
                <RouteContent/>
            </div>
        </section>
    );
};

export default Universities;
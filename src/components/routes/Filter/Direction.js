import React, {useState, useEffect} from 'react';
import axios from "axios";
import SortList from "../SortList/SortList";
import Search from './../../../assets/icon/search.svg'
import Economy from './../../../assets/direction/экономика.svg'
import Btns from "../../Home/btns/Btns";


const Direction = () => {

    const [search, setSearch] = useState("");

    const [search1, setSearch1] = useState("");

    const [all, setAll] = useState([]);

    useEffect(() => {
        axios('http://localhost:8080/all')
            .then(({data}) => setAll(Object.values(data)))
    }, []);


    const searchHandler = (e) => {
        setSearch(search1);
        e.preventDefault();
    };


    const [sort, setSort] = useState('все');
    return (
        <section>
            <div className='direction'>
                <div className='container'>
                    <Btns/>
                    <div className='direction__container'>
                        <h2 className='general__title'>Направления онлайн образования <br/>
                            в Санкт-Петербурге</h2>
                        <p className='general__subtitle'>Мы сотрудничаем с 10 престижными колледжами по программам
                            дистанционного онлайн-обучения.</p>

                        <div className='line'> </div>


                        <div className='direction__flex'>
                            <div className='direction__filter'>
                                <div className='direction__box1'>
                                    <form autoComplete='off' onSubmit={(e) => searchHandler(e)}>
                                        <label className='direction__label'>
                                            <img className='direction__search' src={Search} alt="search"/>
                                            <input onChange={(e) => setSearch1(e.target.value)}
                                                   className='direction__input' placeholder='Поиск по направлениям'
                                                   type="text"
                                                   name='search'
                                            />
                                        </label>
                                    </form>
                                </div>

                                <ul className='filterBody'>
                                    <SortList text='Все' setSort={setSort}/>
                                    <SortList text='дешевле' setSort={setSort}/>
                                    <SortList text='дороже' setSort={setSort}/>
                                    <SortList text='магистратура' setSort={setSort}/>
                                    <SortList text='бакалавриат' setSort={setSort}/>
                                    <SortList text='Рассрочка' setSort={setSort}/>
                                    <SortList text='Можно перевестись' setSort={setSort}/>
                                    <SortList text='Онлайн-защита' setSort={setSort}/>
                                </ul>

                            </div>

                            <div className='direction__content'>
                                <ul className='direction__content-card'>
                                    {
                                        all.sort((a, b) => {

                                            if (sort === 'дешевле') {
                                                return a.price - b.price
                                            } else if (sort === 'дороже') {
                                                return b.price - a.price
                                            }

                                        }).filter((el) => el.title.toLowerCase().includes(search.toLowerCase())).map((item, idx) => (
                                            sort !== 'Онлайн-защита' && sort !== 'Рассрочка' && sort !== 'Можно перевестись' && sort !== 'бакалавриат' && sort !== 'магистратура' ?
                                                <li key={idx} className='direction__content-card_item'>
                                                    <div className='directions__cards-list economy'>
                                                        <p className='directions__cards-title'>{item.title}</p>
                                                        <p className='directions__cards-subtitle'>• от {item.price} ₽
                                                            семестр</p>
                                                        <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                        <p className='directionCardList'>{item.magistratura}</p>
                                                        <p className='directionCardList'>{item.bacalawr}</p>
                                                        <p className='directionCardList'>{item.transfer}</p>
                                                        <p className='directionCardList'>{item.installmentPlan}</p>
                                                        <p className='directionCardList'>{item.OnlineProtection}</p>
                                                        <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                        <button type='button' className='directions__cards-btn'>
                                                            <span>...</span>{item.consultation}</button>
                                                    </div>
                                                </li>
                                                : sort === 'магистратура' && item.magistratura ?

                                                    <div className='directions__cards-list economy'>
                                                        <p className='directions__cards-title'>{item.length === item.magistratura ? '' : item.title}</p>
                                                        <p className='directions__cards-subtitle'>• от {item.length === item.magistratura ? '' : item.price} ₽
                                                            семестр</p>
                                                        <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                        <p className='directionCardList'>{item.magistratura}</p>
                                                        <p className='directionCardList'>{item.bacalawr}</p>
                                                        <p className='directionCardList'>{item.transfer}</p>
                                                        <p className='directionCardList'>{item.installmentPlan}</p>
                                                        <p className='directionCardList'>{item.OnlineProtection}</p>
                                                        <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                        <button type='button' className='directions__cards-btn'>
                                                            <span>...</span>{item.length === item.magistratura ? '' : item.consultation}</button>
                                                    </div>

                                                : sort === 'бакалавриат' && item.bacalawr?
                                                    <div className='directions__cards-list economy'>
                                                        <p className='directions__cards-title'>{item.length === item.bacalawr ? '' : item.title}</p>
                                                        <p className='directions__cards-subtitle'>• от {item.length === item.bacalawr ? '' : item.price} ₽
                                                            семестр</p>
                                                        <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                        <p className='directionCardList'>{item.magistratura}</p>
                                                        <p className='directionCardList'>{item.bacalawr}</p>
                                                        <p className='directionCardList'>{item.transfer}</p>
                                                        <p className='directionCardList'>{item.installmentPlan}</p>
                                                        <p className='directionCardList'>{item.OnlineProtection}</p>
                                                        <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                        <button type='button' className='directions__cards-btn'>
                                                            <span>...</span>{item.length === item.bacalawr ? '' : item.consultation}</button>
                                                    </div>
                                                    : sort === 'Можно перевестись' && item.transfer ?
                                                        <div className='directions__cards-list economy'>
                                                            <p className='directions__cards-title'>{item.length === item.transfer ? '' : item.title}</p>
                                                            <p className='directions__cards-subtitle'>• от {item.length === item.transfer ? '' : item.price} ₽
                                                                семестр</p>
                                                            <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                            <p className='directionCardList'>{item.magistratura}</p>
                                                            <p className='directionCardList'>{item.bacalawr}</p>
                                                            <p className='directionCardList'>{item.transfer}</p>
                                                            <p className='directionCardList'>{item.installmentPlan}</p>
                                                            <p className='directionCardList'>{item.OnlineProtection}</p>
                                                            <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                            <button type='button' className='directions__cards-btn'>
                                                                <span>...</span>{item.length === item.transfer ? '' : item.consultation}</button>
                                                        </div>
                                                        : sort === 'Рассрочка' && item.installmentPlan?
                                                            <div className='directions__cards-list economy'>
                                                                <p className='directions__cards-title'>{item.length === item.installmentPlan ? '' : item.title}</p>
                                                                <p className='directions__cards-subtitle'>• от {item.length === item.installmentPlan ? '' : item.price} ₽
                                                                    семестр</p>
                                                                <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                                <p className='directionCardList'>{item.magistratura}</p>
                                                                <p className='directionCardList'>{item.bacalawr}</p>
                                                                <p className='directionCardList'>{item.transfer}</p>
                                                                <p className='directionCardList'>{item.installmentPlan}</p>
                                                                <p className='directionCardList'>{item.OnlineProtection}</p>
                                                                <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                                <button type='button' className='directions__cards-btn'>
                                                                    <span>...</span>{item.length === item.installmentPlan ? '' : item.consultation}</button>
                                                            </div>
                                                            : sort === 'Онлайн-защита' && item.OnlineProtection?
                                                                <div className='directions__cards-list economy'>
                                                                    <p className='directions__cards-title'>{item.length === item.OnlineProtection ? '' : item.title}</p>
                                                                    <p className='directions__cards-subtitle'>• от {item.length === item.OnlineProtection ? '' : item.price} ₽
                                                                        семестр</p>
                                                                    <p className='directions__cards-subtitle'>• от 2,5 лет</p>
                                                                    <p className='directionCardList'>{item.magistratura}</p>
                                                                    <p className='directionCardList'>{item.bacalawr}</p>
                                                                    <p className='directionCardList'>{item.transfer}</p>
                                                                    <p className='directionCardList'>{item.installmentPlan}</p>
                                                                    <p className='directionCardList'>{item.OnlineProtection}</p>
                                                                    <img className='directions__cards-img' src={Economy} alt="Economy"/>
                                                                    <button type='button' className='directions__cards-btn'>
                                                                        <span>...</span>{item.length === item.OnlineProtection ? '' : item.consultation}</button>
                                                                </div>
                                                                : ''
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Direction;
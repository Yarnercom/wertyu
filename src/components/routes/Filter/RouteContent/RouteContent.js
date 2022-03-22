import React, {useEffect, useState} from 'react';
import axios from "axios";
import './../../../allStyle.css'
import Line from "../../../section/FirstPage/Line";

const RouteContent = () => {

    const [routeContent, setRouteContent] = useState([]);

    useEffect(() => {
        axios('http://localhost:8080/RouteContent1')
            .then(({data}) => setRouteContent(Object.values(data)))
    }, []);


    return (
        <section className='routeContent'>
            <div className='container'>
                <div className='routeContent__container'>
                    {
                        routeContent.map((item, idx) => (
                            <div key={idx}>
                                <div className='routeContent__bodyTitle'>
                                    <h3 className='routeContent__title'>{item.title}</h3>
                                    <p className='routeContent__price'>{item.link}</p>
                                </div>
                                <Line/>
                                <ul className='routeContent__bodyList'>
                                    <li className='routeContent__list'>
                                        <div className='routeContent__left'>
                                            <p className='routeContent__list-subtitle'>{item.subtitle}</p>
                                            <p className='routeContent__list-price'>{item.fromPrice}</p>
                                        </div>
                                        <p className='routeContent__list-symbol'>{item.symbol}</p>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                    <p className='routeContent__more'>... и ещё 19 специалистов</p>
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
            </div>
        </section>
    );
};

export default RouteContent;
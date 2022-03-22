import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Reviews from "../Reviews";
import Review1 from "./Review1";
import Btns from "../../../Home/btns/Btns";

const LeaveFeedback = () => {
    return (
        <div className='container'>
            <Btns/>
            <ul className='enroll__bodyAll'>
                <li className='enroll__review'>
                    <Link className='colorNone' to='review1'>все отзывы</Link>
                </li>
                <li className='enroll__review'>
                    <Link className='colorNone' to='reviews'>оставить отзыв</Link>
                </li>
            </ul>

        <Routes>
            <Route path='review1' element={<Review1/>}/>
            <Route path='reviews' element={<Reviews/>}/>
        </Routes>

        </div>
    );
};

export default LeaveFeedback;
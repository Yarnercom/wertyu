import React from 'react';
import {useNavigate} from 'react-router-dom'

const Btns = () => {


    const navigate = useNavigate();
    const goBack = () =>navigate(-1);
    const goForward = () =>navigate(1);


    return (
            <div className='header__blockNav'>
                <button className='header__nav' onClick={goBack}>{'<'}</button>
                <button className='header__nav' onClick={goForward}>{'>'}</button>
            </div>
    );
};

export default Btns;
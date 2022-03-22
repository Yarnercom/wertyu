import React from 'react';
import './Diploma.css'
import diploma from './../../../assets/diploma/diploma.png'

const Diploma = () => {
    return (
        <section className='diploma'>
            <div className='container'>
                <div className='diploma__container'>
                    <div className='diploma__left'>
                        <h2 className='diploma__title'>Вы получите — диплом гособразца</h2>
                        <p className='diploma__subtitle'>Все наши учебные заведения-партнёры
                            имеют госаккредитацию, а дипломы заносятся
                            в федеральный реестр.</p>
                    </div>
                    <div className='diploma__right'>
                        <img className='diploma__img' src={diploma} alt="diploma"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diploma;
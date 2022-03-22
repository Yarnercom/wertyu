import React from 'react';

const SortList = ({text, setSort}) => {


    return (
            <li className='sortItem' onClick={()=> setSort(text)}>{text}</li>
    );
};

export default SortList;




import React, {useState} from 'react';
import Higher from "../routes/Higher";
import Average from "../routes/Average";
import Ape from "../routes/Ape";

const Showeucation = () => {
    const [content, setContent] = useState('higher');
    return (
        <div>
            {
                content === 'higher' ? <Higher content={content} setContent={setContent}/>
                : content === 'average' ? <Average content={content} setContent={setContent}/>
                : content === 'ape' ? <Ape content={content} setContent={setContent}/>
                : ''
            }
        </div>
    );
};

export default Showeucation;
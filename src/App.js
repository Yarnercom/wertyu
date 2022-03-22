import React, {useEffect, useState} from 'react'
import './style.css'
import {useLocation} from "react-router-dom";
import Home from "./components/Home/Home";
import RingLoader from "react-spinners/RingLoader";

function App() {

    const [loaging, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, []);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);


    return (
        <div className="App">
            {
                loaging ?
                    <div className='background'>
                        <RingLoader color={"#3D54AF"} loading={loaging} size={200}/>
                    </div>
                    :
                    <Home/>
            }
        </div>
    );
}

export default App;

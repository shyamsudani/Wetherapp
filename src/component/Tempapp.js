import './css/style.css';
import React, {useEffect, useState} from 'react';

const Tempapp = () => {

    const [location , setLocation] = useState("junagadh");
    const [search , setSearch] = useState(null);

    useEffect (() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ea86d5cbcff1a7b7685a9bb8c32e91cd`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setSearch(data.main);

        }
        fetchApi();
    }, [location]);

    function fillupdata(e){
        let userdata = e.target.value;
        setLocation(userdata);
    }
    return (
        <>
        <div className='box' >
            <diV className='inputdata'>
                <input type="text" className='dataform' onChange={fillupdata}/>
            </diV>
        
        {!search ? (
            <p>Not Data Found</p>
        ):
        (
            <div className='info'>
            <h2 className='location'><i className="fa-solid fa-street-view"></i>{location}</h2>
            <h1 className='temp'>{search.temp} Cel</h1>
            <h3 className='tempmin-max'> Min : {search.temp_min} Cel  | Max : {search.temp_max} Cel</h3>
        </div>
        )
        }
        </div>
        </>
        
    );
}

export default Tempapp;
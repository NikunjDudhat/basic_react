import React, { useState } from 'react';

function CountryFun(props) {
    const [country, setCountry, city, setCity] = useState("India");
    // const [city, setCity] = useState("Suart");

    const changeCountry = () =>{
        setCountry('US')
        setCity('Hello')
    }
    // const changeCity = () =>{
    //     setCity('Bar')
    // }

    
    return (
        <div>
            <h2>Functiona Based Component</h2>
            <p>Country : {country}</p>
            <p>City : {city}</p>
            <button onClick={() => changeCountry()}>Change</button>
            <br/><br/>
            {/* <button onClick={() => changeCity()}>Change</button> */}
        </div>
    );
}

export default CountryFun;
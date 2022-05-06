import React, { useState } from 'react';

function CityFun(Gdp) {
    const [gdp, setGdp] = useState(0);
    return (
        <div>
            <p>India GDP : {gdp}</p>
            <button onClick={() => setGdp(Gdp)}>Change</button>
        </div>
    );
}

export default CityFun;
import React, { useState } from 'react';

function CityFun(props) {
    const [gdp, setGdp] = useState(0);
    return (
        <div>
            <p>India GDP : {gdp}</p>
            <button onClick={() => setGdp(2.62)}>Change</button>
        </div>
    );
}

export default CityFun;
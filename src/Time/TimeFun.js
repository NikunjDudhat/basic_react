import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const [Time, setTime] = useState(new Date());

    const tick = () => {
        setTime (new Date());
        console.log("Hello");
    }
    useEffect(
        () => {
            // componentDidMound , componentDidUpdate
            const TimeId = setInterval(() => tick(), 1000);
            
            return () => {
                // componentWillUnmound
                clearInterval(TimeId);
            }
        },[Time])

    return (
        <div>
            {Time.toLocaleString()}
        </div>
    );
}

export default TimeFun;
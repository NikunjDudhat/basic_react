import React, { useState } from 'react';

function Course({ CouName }) {

    // const [course, setcourse] = useState(['Android', 'NodeJs', 'ReractJs', 'Flutern']);
    if (CouName === "RNW1") {
        return (
        <div>
            {
                CouName === "RNW1" ? <p>Android </p> : <p>NodeJs</p>
            }
        </div>)
    } else if (CouName === "RNW2") {
        console.log(CouName);
        return (    
            <div>
                {
                    CouName === "RNW2" ? <p>NodeJs </p> : <p>HEllo</p>
                }
            </div>)
    } else if (CouName === "RNW3") {
        console.log("RMW3");
    } else if (CouName === "RNW4") {
        console.log("RNW4");
    } else {
        console.log("Hello");
    }



    return (
        <div>
            {/* <p>{course}</p>*/}
            {
                CouName === "RNW1" ? <p>Android </p> : <p>NodeJs</p>
            }
        </div>

    );
}

export default Course;
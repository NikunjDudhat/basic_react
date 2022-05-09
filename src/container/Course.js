import React, { useState } from 'react';

function Course({CouName}) {

    // const [course, setcourse] = useState(['Android', 'NodeJs', 'ReractJs', 'Flutern']);


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
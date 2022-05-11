import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {

    // const [Branch, setBranch] = useState(['RNW1', 'RNW2', 'RNW3', 'RNW4']);
    const [Branch1, setBranch1] = useState('RNW1');
    const [Branch2, setBranch2] = useState('RNW2');
    const [Branch3, setBranch3] = useState('RNW3');
    const [Branch4, setBranch4] = useState('RNW4');

    const [course1, setcourse1] = useState('Android');
    const [course2, setcourse2] = useState('NodeJs');
    const [course3, setcourse3] = useState('ReactJs');
    const [course4, setcourse4] = useState('Flutern');


    const courseName1 = () => {
        setBranch1('RNW2')
        setcourse1("Android")
    }

    const courseName2 = () => {
        setBranch2('RNW2')
        setcourse2("NodeJs")
    }

    const courseName3 = () => {
        setBranch3('RNW3')
        setcourse3("ReactJs")
    }

    const courseName4 = () => {
        setBranch4('RNW4')
        setcourse4("Fluter")
    }

    return (
        <div>
            <p>{Branch1}</p>
            <Course CouName={Branch1} />
            <button onClick={() => courseName1()}>Change1</button>


            <p>{Branch2}</p>
            <Course CouName={Branch2} />
            <button onClick={() => courseName2()}>Change2</button>


            <p>{Branch3}</p>
            <Course CouName={Branch3} />
            <button onClick={() => courseName3()}>Change3</button>


            <p>{Branch4}</p>
            <Course CouName={Branch4} /> 
            <button onClick={() => courseName4()}>Change4</button>
        </div>
    );
}

export default Branch;
import React, { useState } from 'react';

function Count(props) {

    const [count, setCount] = useState(0);

    const AddItem = () => {
        if(count < 10){
            setCount(count + 1);
        }
    };

    const RemoveItem = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button type="btn" onClick={() => RemoveItem()}>Remove</button>
            <input type="text" value={count.toLocaleString()} />
            <h4>
                {
                    count.toLocaleString()
                }
                </h4>
            <button type="btn" onClick={() => AddItem()}>Add</button>

        </div>
    );
}

export default Count;
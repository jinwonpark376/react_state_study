import React from 'react';

function BottomLineInput({value, setValue}) {
    return (
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value}
               style={{border: "none", borderBottom: "1px solid grey"}}/>
    )
}

export default BottomLineInput;
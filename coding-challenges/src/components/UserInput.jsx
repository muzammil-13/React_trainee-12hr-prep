import React, {useState} from 'react';

const UserInput=()=>{
    const [inputValue, setInputValue]=useState('');

    const handleChange=(event)=>{
        setInputValue(event.target.value);
    };

    return(
        <div>
            <h2>User Input</h2>
            <input 
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
            />
            <p>You typed: {inputValue}</p>
        </div>
    )
}

export default UserInput;
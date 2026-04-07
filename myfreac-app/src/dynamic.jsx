import React,{ useState } from "react";

function ControlledInput(){
    // state and event handler
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    }
    return(
        // JSX
        <div>
            <h2>Dynamic Form Input</h2>
            <label htmlFor="">Enter text: 
                <input type="text" value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value)    
                }} />
            </label>
            <p>Current Input Value: {inputValue}</p>
        </div>
    );
}

export default ControlledInput;
import React from 'react';
import './Input.css';

const input=props=>{
return(
    <input className="Input" type="text" onChange={props.changed} value={props.input}/>
)
}

export default input;
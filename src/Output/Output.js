import React from 'react';
import './Output.css';


const output=props=>{
    return (
        <div className="Output">
            <p>String 's size {props.length}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default output;
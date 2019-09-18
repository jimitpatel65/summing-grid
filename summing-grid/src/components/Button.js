import React from 'react';
import './button.css';

const Button = ({calculate, value}) =>  {
    return <button className="button" onClick={calculate}>{value}</button>
};

export default Button;
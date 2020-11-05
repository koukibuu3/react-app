import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button className="default" disable={props.disable}>
      {props.value}
    </button>
  );
}

export default Button;

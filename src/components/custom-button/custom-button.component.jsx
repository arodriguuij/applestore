import React from 'react';
import './custom-button.styles.css';

const CustomButton = props => {
    return(
        <button className="customButton">{props.text}</button>
    );
}

export default CustomButton;
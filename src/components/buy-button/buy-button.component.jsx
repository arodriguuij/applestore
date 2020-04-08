import React from 'react';
import { Link } from "react-router-dom";
import './buy-button.styles.css';

const BuyButton = ({collection, id}) => {
    return(
        <Link to={`/${collection}/${id}`}>
        <button className="buy">Buy</button>
      </Link>
    )
}

export default React.memo(BuyButton);
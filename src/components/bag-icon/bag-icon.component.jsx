import React from "react";
import './bag-icon.styles.css';

const BagIcon = ({children}) => {
  return (
    <div className="cart-icon">
      {children}
    </div>
  );
};

export default BagIcon;

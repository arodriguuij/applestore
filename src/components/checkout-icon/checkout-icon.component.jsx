import React from "react";
import './checkout-icon.styles.css';

const CheckoutIcon = ({children}) => {
  return (
    <div className="cart-icon">
      {children}
    </div>
  );
};

export default CheckoutIcon;

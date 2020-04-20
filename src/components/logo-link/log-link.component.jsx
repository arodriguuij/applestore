import React from "react";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";

const LogoLink = ({children, label, url, role}) => (
  <a
    role={role}
    aria-label={label}
    href={url}
  >
    <CheckoutIcon>
      {children}
    </CheckoutIcon>
  </a>
);

export default LogoLink;

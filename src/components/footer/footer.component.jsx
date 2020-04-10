import React from "react";
import "./footer.styles.css";
import CheckoutIcon from "../checkout-icon/checkout-icon.component";
import { ReactComponent as ReactLogoLinkedin } from "../../assets/linkedin.svg";
import { ReactComponent as ReactLogoGithub } from "../../assets/github.svg";
import { ReactComponent as ReactLogoPortfolio } from "../../assets/portfolio.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <a
        role="button"
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/alejandro-rodriguez-escudero-260362144/"
      >
        <CheckoutIcon>
          <ReactLogoLinkedin />
        </CheckoutIcon>
      </a>
      <a
        role="button"
        aria-label="Github"
        href="https://github.com/arodriguuij"
      >
        <CheckoutIcon>
          <ReactLogoGithub />
        </CheckoutIcon>
      </a>
      <a
        role="button"
        aria-label="Portfolio"
        href="https://peaceful-ardinghelli-d6add1.netlify.com/"
      >
        <CheckoutIcon>
          <ReactLogoPortfolio />
        </CheckoutIcon>
      </a>
    </div>
  );
};

export default Footer;

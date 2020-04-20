import React from "react";
import { ReactComponent as ReactLogoLinkedin } from "../../assets/linkedin.svg";
import { ReactComponent as ReactLogoGithub } from "../../assets/github.svg";
import { ReactComponent as ReactLogoPortfolio } from "../../assets/portfolio.svg";
import LogoLink from "../logo-link/log-link.component";
import "./footer.styles.css";

const Footer = () => (
  <div className="footer-main">
    <div className="logo-link">
      <LogoLink
        role="button"
        label={"Linkedin"}
        url={
          "https://www.linkedin.com/in/alejandro-rodriguez-escudero-260362144/"
        }
      >
        <ReactLogoLinkedin />
      </LogoLink>
    </div>
    <div className="logo-link">
      <LogoLink
        role="button"
        label={"Github"}
        url={"https://github.com/arodriguuij"}
      >
        <ReactLogoGithub />
      </LogoLink>
    </div>
    <div className="logo-link">
      <LogoLink
        role="button"
        label={"Portfolio"}
        url={"https://peaceful-ardinghelli-d6add1.netlify.com/"}
      >
        <ReactLogoPortfolio />
      </LogoLink>
    </div>
  </div>
);

export default Footer;

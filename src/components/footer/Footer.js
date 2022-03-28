import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Designed & developed <span role="img"></span> by {greeting.title2} <span>{new Date().getFullYear()}</span>
        </p>
      </Fade>
    </div>
  );
}

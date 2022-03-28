import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  // const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span className="greeting-full_name" style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle} <br/>
                {greeting.subTitle1} <br/>
                {greeting.subTitle2} <br/>
                {greeting.subTitle3} <br/>              
              </p>
              <p className="contact_me"
              style={{ color: theme.secondaryText }}
              > Get in touch through the links below:</p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <a
                  {...styles}
                  className="button"
                  type="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={greeting.resumeLink}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

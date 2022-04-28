import React from "react";
import "./skillProgress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "../../containers/skills/DataScienceImg";
import FullStackImg from "../../containers/skills/FullStackImg";
import CloudInfraImg from "../../containers/skills/CloudInfraImg";
import Top from "../../containers/topbutton/Top";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function StackProgress(props, index) {
    const theme = props.theme;
    return (
      <>
      <div key={index} className="skills-container">

        
          <div className="skills-bar">
          <Fade bottom duration={2000} distance="70px">
              <h1 className="skills-heading">Proficiency</h1>
          </Fade>
              {techStack.experience.map((exp,index) => {
                  const progressStyle = {
                      width: exp.progressPercentage
                  };
                  return (
          <Fade key={index} left duration={1000}>
                  <div className="skill">
                  <Fade left duration={1700}>
                      <p style={{color: theme.secondaryText}}>{exp.Stack}</p>
                  </Fade>
                  <Fade left duration={1900}>
                      <div className="meter">
                          <span style={progressStyle}></span>
                      </div>
                  </Fade>
                  </div>
          </Fade>
                  );
              })}         
          </div>
          <Fade right duration={2000}>
          <div className="skills-image-div">
          <GetSkillSvg fileName={techStack.fileName} theme={theme} />
          </div>
         </Fade>
      </div>
      <Top theme={props.theme} />
      </>

      );
    }
    
    export default StackProgress;




import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_content-wrapper_inner-content">
            <h3 className="skills_content-wrapper_inner-content_category-text">
              {item.label}
            </h3>
            <div className="skills_content-wrapper_inner-content_progressbar-container">
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity:1", "opacity:0"]}
                  iterationCount="1"
                >
                  <div className="progressbar-wrapper" key={j}>
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                </AnimateKeyframes>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

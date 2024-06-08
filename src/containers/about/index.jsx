import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDatabase, FaReact, FaNodeJs, FaDev, FaDocker } from "react-icons/fa";
const data = [
  {
    label: "Name",
    value: "RamaChandra Ananthapalli",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Email",
    value: "amnvramachandra@gmail.com",
  },
];
const jobSummary = `
Resigned as System Engineer at Infosys, now pursuing my MTech in Computer Science and Engineering at IIT Kanpur.

Moreover, I am proud to have achieved the 167th rank in GATE CSE 2022, out of a staggering 1,00,000 individuals nationwide. This accomplishment speaks volumes about my dedication, perseverance, and aptitude in the field of computer science.

My dedication to mastering my craft is evidenced by my completion of over 450 Data Structures and Algorithms problems on platforms like LeetCode, CodingNinjas, and GeeksforGeeks.

During my coursework at IIT Kanpur, I have acquired and honed skills in C++, Java, React, Node.js, and MySQL. Wherever there may be gaps in my skill set, I compensate with my determination to learn and grow.

Outside of tech, I play chess, Table Tennis in  my leisure time and also I have a genuine passion for dance viewing it as a stress buster.`;
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          {/* <Animate
            play
            duration={1.5}
            delay={0.35}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateY(0px)" }}
          > */}
          <h3>Summary</h3>
          <br />
          <p>{jobSummary}</p>
          {/* </Animate>
          <Animate
            play
            duration={1.5}
            delay={0.35}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateY(0px)" }}
          > */}
          <h3 className="personalInformationHeaderText">
            Personal Information
          </h3>
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
          {/* </Animate> */}
        </div>
        <div className="about_content_serviceWrapper">
          <div className="about_content_serviceWrapper_innerContent">
            <div>
              <FaDocker
                size={60}
                color="var(--yellow-theme-main-color)"
              ></FaDocker>
            </div>
            <div>
              <FaReact
                size={60}
                color="var(--yellow-theme-main-color)"
              ></FaReact>
            </div>
            <div>
              <FaNodeJs
                size={60}
                color="var(--yellow-theme-main-color)"
              ></FaNodeJs>
            </div>
            <div>
              <FaDatabase
                size={60}
                color="var(--yellow-theme-main-color)"
              ></FaDatabase>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

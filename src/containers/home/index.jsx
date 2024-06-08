import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };
  return (
    <div id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Ram Chandra
          <br />
          Welcome to my world
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={0.35}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home_contact-me">
          <button onClick={handleNavigateToContactMe}>Hire Me</button>
        </div>
      </Animate>
    </div>
  );
};

export default Home;

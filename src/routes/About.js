import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>“I tried practicing to sudy React.”</span>
      <span>− Jiseok Lee, 2021</span>
    </div>
  );
}

export default About;

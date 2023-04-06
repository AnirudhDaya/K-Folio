import React from "react";
import "./Me.css";
import { socials } from "../../assets/export";

function Me() {
  return (
    <div className="MeContainer">
      <div className="MeTop">
        <a href="https://linktr.ee/">
          <div className="LogoHover">
            <h1 className="BigLogo mainLogo">Anirudh Dayanandan</h1>
          </div>
        </a>

        <div className="skillContainer">
          <div className="skills skillSet_1">
            <span className="skillPara skill_1">cloud engineer <span className="bulletPoints"> &bull; </span>{" "} </span>
            <span className="skillPara skill_2">
              problem solving aficianado <span className="bulletPoints"> &bull; </span>{" "}
            </span>
            <span className="skillPara skill_3">
              react native developer <span className="bulletPoints"> &bull; </span>{" "}
            </span>
          </div>
          <div className="skills skillSet_2">
            <span className="skillPara skill_4">ai/ml engineer  <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_5">
              data structure and oops  <span className="bulletPoints">&bull;</span> { " "}
            </span>
            <span className="skillPara skill_6">python scripting  <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_7">java  <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_8">rust  <span className="bulletPoints">&bull;  </span></span>
          </div>
          <div className="skills skillSet_3">
            <span className="skillPara skill_9">c++ eater  <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_10">devOPs <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_12">barca <span className="bulletPoints"> &bull; </span> </span>
            {/* <span className="skillPara skill_13">made by ANIZ </span> */}
          </div>
        </div>

        {/* <div className="skills skillSet_4">
          <p className="meDetails">
             As a tech enthusiast and problem solver, I'm constantly exploring new technologies and creating innovative solutions. With expertise in DevOps and scripting, I specialize in creating seamless and efficient applications that solve complex problems. Take a look at my projects to see how I can help your business succeed. Let's connect and explore new possibilities together!
          </p>
         
        </div> */}
      </div>

      <div className="lineConnect"></div>
      <h3 className="connect">Connect with me </h3>
      <div className="socialLogo">
        <div className="socialLogo-track">
          <a href="">
            {socials.map((src, index) => (
              <img src={src.src} alt="socials" className={`socials ${index}`} />
            ))}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Me;

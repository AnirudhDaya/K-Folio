import React from "react";
import "./Me.css";
import { AnirudhLogo, AnirudhMob } from "../../assets/export";
import { socials } from "../../assets/export";

function Me() {
  return (
    <div className="MeContainer">
      <div className="MeTop">
        <div className="main">
          <img src={AnirudhMob} alt="AnirudhMob" className="mobLogo"/>
          <img src={AnirudhLogo} alt="AnirudhLogo" className="mainLogo" />
        </div>
<div className="skillContainer">


        <div className="skills skillSet_1">
          <span className="skillPara skill_1">cloud engineer &bull; </span>
          <span className="skillPara skill_2">
            problem solving aficianado &bull;{" "}
          </span>
          <span className="skillPara skill_3">
            react native developer &bull;{" "}
          </span>
        </div>
        <div className="skills skillSet_2">
          <span className="skillPara skill_4">ai/ml engineer &bull; </span>
          <span className="skillPara skill_5">
            data structure and oops &bull;{" "}
          </span>
          <span className="skillPara skill_6">python scripting &bull; </span>
          <span className="skillPara skill_7">java &bull; </span>
          <span className="skillPara skill_8">rust &bull; </span>
        </div>
        <div className="skills skillSet_3">
          <span className="skillPara skill_9">c++ eater &bull; </span>
          <span className="skillPara skill_10">devOPs&bull; </span>
          <span className="skillPara skill_11">devOPS &bull; </span>
          <span className="skillPara skill_12">barca &bull; </span>
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

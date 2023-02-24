import React from "react";
import "./Me.css";
import { AnirudhLogo } from "../../assets/export";
import { socials } from "../../assets/export";

function Me() {
  return (

    <div className="MeContainer">
      <div className="Me_Top">
        <div className="mainLogo">
          <img src={AnirudhLogo} alt="AnirudhLogo" />
        </div>

        <div className="skills skillSet_1">
          <span className="skillPara skill_1">cloud engineer &bull; </span>
          <span className="skillPara skill_2">problem solving aficianado &bull; </span>
          <span className="skillPara skill_3">react native developer &bull; </span>
        </div>
        <div className="skills skillSet_2">
          <span className="skillPara skill_4">ai/ml engineer &bull; </span>
          <span className="skillPara skill_5">data structure and oops &bull; </span>
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
      <div className="socialLogo">
        <a href="">
          {socials.map((src, index) => (
            
            <img
              src={src.src}
              alt="socials"
              className={`socialLogo ${index}`}
            />
        
          ))}
        </a>
      </div>
    </div>
  );
}

export default Me;

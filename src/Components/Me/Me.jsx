import React from "react";
import "./Me.css";
import { socials } from "../../assets/export";

function Me() {
  return (
    <div className="MeContainer">
      <div className="MeTop">
        <a href="https://bento.me/anirudhdayanand"  target="_blank" rel="noopener noreferrer">
          <div className="LogoHover">
            <h1 className="BigLogo mainLogo">Anirudh Dayanandan</h1>
          </div>
        </a>

        <div className="skillContainer">
          <div className="skills skillSet_1">
            <span className="skillPara skill_1">google cloud certified <span className="bulletPoints"> &bull; </span>{" "} </span>
            <span className="skillPara skill_4">ai/ml engineer  <span className="bulletPoints">&bull;  </span></span>
          </div>
          <div className="skills skillSet_2">
            <span className="skillPara skill_2">
            devOPs <span className="bulletPoints"> &bull; </span>{" "}
            </span>
            <span className="skillPara skill_6">automation <span className="bulletPoints">&bull;  </span></span>
            <span className="skillPara skill_10">problem solving aficianado <span className="bulletPoints">&bull;  </span></span>
          </div>
        </div>
      </div>

      <div className="lineConnect"></div>
      <h3 className="connect">Connect with me </h3>
      <div className="socialLogo">
        <div className="socialLogo-track">
          {socials.map((src, index) => (
            <a href = {src.altLink}>
                <img src={src.src} alt="socials" className={`socials ${index}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Me;

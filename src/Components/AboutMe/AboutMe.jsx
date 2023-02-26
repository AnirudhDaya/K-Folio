import React from "react";
import "./AboutMe.css";
import { AnirudhSmall, photo, darkSocials,socials } from "../../assets/export";


function AboutMe() {
  return (
    <div className="AboutMEContainer">
      <div className="AboutLogo">
        <img src={AnirudhSmall} alt="" />
      </div>

      <div className="middleContainer">
        <div className="photoAndFrame">
          <img src={photo} alt="" className="photo" />
          <div className="darkLogoFrame">
            {darkSocials.map((take) => (
              <a href="">
                <img src={take.src} alt="" className="darkSocialLogo" />
              </a>
            ))}
          </div>
        </div>

        <div className="detailsScroll">
          <div className="detailsScroll-track">
            <div className="detail whoAmI">
              <h3 className="aboutmeTitle  whoTitle">Who Am I ?</h3>
              <p className="aboutmePara whoPara">
                I'm a tech enthusiast and problem solver with a passion for
                DevOps and scripting. With expertise in Python and C++, I
                specialize in creating efficient and scalable solutions for
                complex problems. From automating deployments to optimizing
                workflows, I'm dedicated to streamlining processes for
                businesses. Take a look at my projects and get in touch to learn
                more.
              </p>
            </div>
            <div className="detail aboutme">
              <h3 className="aboutmeTitle aboutTitle">About Me</h3>
              <p className="aboutmePara aboutPara">
                I'm a tech enthusiast and problem solver with a passion for
                DevOps and scripting. With expertise in Python and C++, I
                specialize in creating efficient and scalable solutions for
                complex problems. From automating deployments to optimizing
                workflows, I'm dedicated to streamlining processes for
                businesses. Take a look at my projects and get in touch to learn
                more.
              </p>
            </div>
            <div className="detail education">
              <h3 className="aboutmeTitle educationTitle">Education</h3>
              <p className="aboutmePara">
              I'm a tech enthusiast and problem solver with a passion for
                DevOps and scripting. With expertise in Python and C++, I
                specialize in creating efficient and scalable solutions for
                complex problems. From automating deployments to optimizing
                workflows, I'm dedicated to streamlining processes for
                businesses. Take a look at my projects and get in touch to learn
                more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lineConnect"></div>
      <h3 className="connect">my Workspace</h3>
      <div className="socialLogo">
        <div className="socialLogo-track">
          <a href="">
            {socials.map((src, index) => (
              <img src={src.src} alt="socials" className={`socials ${index}`} />
            ))}
          </a>
        </div>
      </div>
                <br/>
      <div className="credits">
        <div className="rectangleCredit">
            <h2 className="credit creditsName">ANIZ</h2>
            <h2 className="credit">all rights reserved </h2>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;

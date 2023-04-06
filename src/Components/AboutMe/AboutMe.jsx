import React from "react";
import "./AboutMe.css";
import { photo, darkSocials, tech } from "../../assets/export";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="AboutMEContainer">
      <div className="commonMainLogo">
        <a href="https://linktr.ee/anirudhdayanand">
          <div className="LogoHover2">
            <h1 className="subLogo mainLogo ">Anirudh Dayanandan</h1>
          </div>
        </a>
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
              <div className="educationFrame">
                <div className="educationDetails edu-1">
                  <div className="subDesc">
                    <h3 className="textdesc detailDesc1">
                      {" "}
                      Computer Science Engineering (AI/ML)
                    </h3>
                    <h4 className="textdesc detailDesc1.1">2020 - 2024</h4>
                  </div>
                  <h3 className="textdesc detailDesc2">
                    Sree Chithra Thirunal College Of Engineering
                  </h3>
                </div>
                <div className="educationDetails edu-2">
                  <div className="subDesc">
                    <h3 className="textdesc detailDesc1">
                      {" "}
                      Computer Science Engineering (AI/ML)
                    </h3>
                    <h4 className="textdesc detailDesc1.1">2020 - 2024</h4>
                  </div>
                  <h3 className="textdesc detailDesc2">
                    Sree Chithra Thirunal College Of Engineering
                  </h3>
                </div>
                <div className="educationDetails edu-3">
                  <div className="subDesc">
                    <h3 className="textdesc detailDesc1">
                      {" "}
                      Computer Science Engineering (AI/ML)
                    </h3>
                    <h4 className="textdesc detailDesc1.1">2020 - 2024</h4>
                  </div>
                  <h3 className="textdesc detailDesc2">
                    Sree Chithra Thirunal College Of Engineering
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lineConnect"></div>
      <h3 className="connect">My Workspace</h3>
      <div className="socialLogo">
        <div className="socialLogo-track">
          <a href="">
            {tech.map((take, index) => (
              <Link to = "/ComingSoon">
              <img
                src={take.src}
                alt="socials"
                className={`socials ${index}`}
              /> 
              </Link>
            ))}
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default AboutMe;

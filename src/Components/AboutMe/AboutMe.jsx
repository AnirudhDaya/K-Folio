import React from "react";
import "./AboutMe.css";
import { photo, darkSocials, tech } from "../../assets/export";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="AboutMEContainer">
      <div className="commonMainLogo">
        <a href="https://bento.me/anirudhdayanand"  target="_blank" rel="noopener noreferrer">
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
              <a href={take.altLink}  target="_blank" rel="noopener noreferrer">
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
                I'm an automation enthusiast who loves building projects and sharing
                my experiences through part-time blogging. With a passion for DevOps 
                and open-source tech, I'm always seeking new ways to contribute to the 
                community. I'm also a machine learning enthusiast who enjoys expanding 
                my knowledge in the field. I specialize in creating efficient and scalable 
                solutions for complex problems.Above all, I believe in learning in public 
                and creating an environment that encourages growth and development. Take a look 
                at my projects and get in touch to learn more.
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
                    Sree Chitra Thirunal College Of Engineering
                  </h3>
                  <div className="educationDetails edu-1">
                  <div className="subDesc">
                    <h3 className="textdesc detailDesc1">
                      {" "}
                      School
                    </h3>
                    <h4 className="textdesc detailDesc1.1">2007 - 2020</h4>
                  </div>
                  <h3 className="textdesc detailDesc2">
                    The Indian School, Bahrain
                  </h3>
                </div>
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
          <a href=""  target="_blank" rel="noopener noreferrer">
            {tech.map((take, index) => (
              <Link to = "/CommingSoon">
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

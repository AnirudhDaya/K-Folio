import React from "react";
import "./Project.css";
import { experience, forProjects } from "../../assets/projectExport";

function Project() {
  return (
    <div className="projectContainer">
      <div className="commonMainLogo">
        <a href="https://linktr.ee/anirudhdayanand">
          <div className="LogoHover3">
            <h1 className="subLogo mainLogo">Anirudh Dayanandan</h1>
          </div>
        </a>
      </div>

      <div className="projectsNexperience">
        <h1 className="expMainTitle">Experience</h1>
        
        <div className="experienceContainer">
          {experience.map((item) => {
            return (
              <div className={`experinceFrame exp${item.id}`}>
                <div className="expHeading">
                  <h3 className="expTitle">{item.expTitle}</h3>
                  <h3 className="expTitle expYear">{item.year}</h3>
                </div>
                <p className="expDesc">{item.desc}</p>
              </div>
            );
          })}

        </div>

        <h1 className="projMainTitle">Project</h1>

        <div className="grid">
          {forProjects.map((item) => {
            return (
              <div className="card">
                <span className="icon">
                  <div
                    key={item.logo}
                    dangerouslySetInnerHTML={{ __html: item.logo }}
                  />
                </span>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <div className="shine"></div>
                <div className="background">
                  <div className="tiles">
                    <div className="tile tile-1"></div>
                    <div className="tile tile-2"></div>
                    <div className="tile tile-3"></div>
                    <div className="tile tile-4"></div>

                    <div className="tile tile-5"></div>
                    <div className="tile tile-6"></div>
                    <div className="tile tile-7"></div>
                    <div className="tile tile-8"></div>

                    <div className="tile tile-9"></div>
                    <div className="tile tile-10"></div>
                  </div>

                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;

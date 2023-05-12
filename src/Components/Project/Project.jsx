import React from "react";
import "./Project.css";
import { project1, project2 } from "../../assets/export";

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
        <div className="experinceFrame exp1">
          <div className="expHeading">
            <h3 className="expTitle">Cloud Facilitator</h3>
            <h3 className="expTitle expYear">2020 - 2024</h3>
          </div>
          <p className="expDesc">
            Bachelor of Science in Digital Media Design is a highly
            interdisciplinary degree that prepares students to work in the
            ever-growing field of digital media. Students who pursue this degree
            will gain a deep understanding of the principles of design,
          </p>
        </div>
        <div className="experinceFrame exp2">
          <div className="expHeading">
            <h3 className="expTitle">Cloud Facilitator</h3>
            <h3 className="expTitle expYear">2020 - 2024</h3>
          </div>
          <p className="expDesc">
            Bachelor of Science in Digital Media Design is a highly
            interdisciplinary degree that prepares students to work in the
            ever-growing field of digital media. Students who pursue this degree
            will gain a deep understanding of the principles of design,
          </p>
        </div>
        <div className="experinceFrame exp3">
          <div className="expHeading">
            <h3 className="expTitle">Cloud Facilitator</h3>
            <h3 className="expTitle expYear">2020 - 2024</h3>
          </div>
          <p className="expDesc">
            Bachelor of Science in Digital Media Design is a highly
            interdisciplinary degree that prepares students to work in the
            ever-growing field of digital media. Students who pursue this degree
            will gain a deep understanding of the principles of design,
          </p>
        </div>
        <div className="experinceFrame exp4">
          <div className="expHeading">
            <h3 className="expTitle">Cloud Facilitator</h3>
            <h3 className="expTitle expYear">2020 - 2024</h3>
          </div>
          <p className="expDesc">
            Bachelor of Science in Digital Media Design is a highly
            interdisciplinary degree that prepares students to work in the
            ever-growing field of digital media. Students who pursue this degree
            will gain a deep understanding of the principles of design,
          </p>
        </div>
      </div>

      <h1 className="projMainTitle">Project</h1>
      <br />
      {/*       
      <div className="projectContainer">
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
        <div className="projectFrame">
          <img src={project2} alt="" className="projectImage" />
          <div className="projectContent">
            <h3 className="projectTitle">Sylabus Condensor</h3>
            <p className="projdescription">
              Bachelor of Science in Digital Media Design is a highly
              interdisciplinary degree that prepares students to work in the
              ever-growing field of digital media. Students who pursue this
              degree will gain a deep understanding of the principles of design,{" "}
            </p>
          </div>
        </div>
      </div> */}

      <div className="grid">
        <div className="card">
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
            </svg>
          </span>
          <h4>Project</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
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
        
        <div className="card">
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
            </svg>
          </span>
          <h4>Grab A Garb</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
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
        <div className="card">
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
            </svg>
          </span>
          <h4>Scene</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
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

        <div className="card">
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
              <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
              <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
              <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
            </svg>
          </span>
          <h4>Sylabus Condensor</h4>
          <p>
            Standard chunk of Lorem Ipsum used since the 1500s is showed below
            for those interested.
          </p>
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
      </div>

      </div>
    </div>
  );
}

export default Project;

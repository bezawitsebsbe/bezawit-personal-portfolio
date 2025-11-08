import React from "react";
import Main from "../Main/Main";
import "./Resume.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  const NameOfScreen = "Resume";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bezawit Sebsbe Resume.pdf"; // Path to your CV file
    link.download = "Bezawit Sebsbe.pdf"; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Main NameOfScreen={NameOfScreen}>
      <article className="resume-wrapper">
        <div className="resume-container1">
          <div className="icon-div">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <div className="title-div">
            <h1>Education</h1>
          </div>
        </div>
        <div className="resume-container2">
          <div class="bullet">
            <div class="circle"> </div>
            <div class="content">
              <h3 className="main-title">Addis Ababa University</h3>
              <p id="bold">Bachelor of Science in Software Engineering</p>

              <p id="duration">2022-2027</p>
            </div>
          </div>
        </div>

        <div className="resume-container1">
          <div className="icon-div">
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
          <div className="title-div">
            <h1>Experiance</h1>
          </div>
        </div>
        <div className="resume-container2">
          <div class="bullet">
            <div class="content">
              <h3 className="main-title">Technical Skills</h3>
              <div className="circle"></div>
              <div className="Skills-list">
                <p>Python</p>
                <p>Javascript</p>
                <p>React</p>
                <p>MySQL</p>
                <p>Kotlin</p>
                <p>NodeJs</p>
                <p>Linux</p>
                <p>React Native</p>
                <p>Angular</p>
                <p>MongoDB</p>
                <p>Flutter</p>
                <p>NextJs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-container2">
          <div class="bullet">
            <div class="circle"></div>
            <div class="content">
              <h3 className="main-title">Achievements</h3>
              <p className="experiance-paragraph">
                <div className="mini-circle"></div>
                Completed programming fundamentals from UDACITY.
              </p>
              <p className="experiance-paragraph">
                <div className="mini-circle"></div>
                Completed courses in CyberOps, Python Programming, earning
                certifications from Cisco Networking Academy.
              </p>
              <p className="experiance-paragraph">
                <div className="mini-circle"></div>
                Completed Courses in Network Security, and Linux Essentials,
                earning certifications from Cisco Networking Academy.
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="download-button"
        >
          <div className="download-div">
            <FontAwesomeIcon icon={faFile} />
          </div>
          Download CV
        </button>
      </article>
    </Main>
  );
}

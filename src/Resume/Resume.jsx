import React from "react";
import Main from "../Main/Main";
import "./Resume.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
export default function Resume() {
  const NameOfScreen = "Resume";
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
              <h3>Addis Ababa University</h3>
              <p>Bachelor of Science in Software Engineering</p>
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
            <div class="circle"></div>
            <div class="content">
              <h3>Skills</h3>
              <p>Advanced:python,javascript,React,NodeJs</p>
              <p>Intermediate:Java,Linux,NextJs,ExpressJs,MySQL,MongoDB</p>
              <p>Beginner:C#,Angular</p>
            </div>
          </div>
        </div>
        <div className="resume-container2">
          <div class="bullet">
            <div class="circle"></div>
            <div class="content">
              <h3>Achievements</h3>
              <p>Completed programming fundamentals from UDACITY.</p>
              <p>
                Completed courses in Cybersecurity, Python Programming, and
                Network Security, earning certifications from Cisco Networking
                Academy.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Main>
  );
}

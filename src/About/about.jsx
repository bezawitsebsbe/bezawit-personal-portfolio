import React from "react";
import "./About.css";
import logo from "../assets/logo192.png";
import mobile from "../assets/icon-app.svg";
import web from "../assets/icon-dev.svg";
import ui from "../assets/icon-design.svg";
import frontend from "../assets/front-end (2).png";
import { Link } from "react-router-dom";
import js from "../assets/javascript.png";
import figma from "../assets/Figma.svg";
import dart from "../assets/Dart.svg";
import flutter from "../assets/Flutter.svg";
import post from "../assets/Postman.svg";
import android from "../assets/AndroidStudio.svg";

import Main from "../Main/Main";

// Adjust the path as necessary

export default function About() {
  const NameOfScreen = "About Me";
  return (
    <Main NameOfScreen={NameOfScreen}>
      <article className="body">
        <p>
          I am a software developer with a passion for creating dynamic and
          responsive web and mobile applications. My journey in tech began with
          a curiosity about how things work, evolving into a robust career where
          I solve problems and build solutions that truly make a difference.
          Currently, I am also pursuing a major in AI, allowing me to integrate
          artificial intelligence into my projects and enhance their
          functionality.
        </p>
        <p>
          Specializing in full-stack development, I focus on both user
          experience and backend functionality. I enjoy working with modern
          frameworks and libraries to create seamless interactions and robust
          applications. My goal is to continuously learn and grow in this
          ever-evolving field while contributing to projects that have a
          positive impact on users and the community.
        </p>
        <h1>What I'm Doing</h1>
        <div className="skills-main-wrapper">
          <div className="skills-wrapper">
            <div className="img">
              <img src={mobile} alt="mobile" />
            </div>
            <div className="developer-wrapper">
              <h2>Mobile Apps</h2>
              <p className="paragraph">
                Development of applications for Android and iOS.
              </p>
            </div>
          </div>
          <div className="skills-wrapper">
            <div className="img">
              <img src={web} alt="web-development" />
            </div>
            <div className="developer-wrapper">
              <h2>Web Development</h2>
              <p className="paragraph">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </div>
          <div className="skills-wrapper">
            <div className="img">
              <img src={ui} alt="ui" />
            </div>
            <div className="developer-wrapper">
              <h2>UI/UX Design</h2>
              <p className="paragraph">
                High-quality design of applications and sites at the
                professional level.
              </p>
            </div>
          </div>
          <div className="skills-wrapper">
            <div className="img">
              <img src={frontend} alt="frontend" />
            </div>
            <div className="developer-wrapper">
              <h2>Frontend Development</h2>
              <p className="paragraph">
                Creating responsive and dynamic user interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="skills-wrapper2">
          <h1 className="skills">Skills</h1>
          <ul className="skills-list scrollbar">
            <li className="skills-item">
              <a href="https://reactjs.org/" target="_blank">
                <img src={logo} alt="skill-logo" />
              </a>
            </li>

            <li className="skills-item">
              <a href="https://www.figma.com/" target="_blank">
                <img src={figma} alt="skill-logo" />
              </a>
            </li>
            <li className="skills-item">
              <a href="https://dart.dev" target="_blank">
                <img src={dart} alt="skill-logo" />
              </a>
            </li>
            <li className="skills-item">
              <a href="https://flutter.dev" target="_blank">
                <img src={flutter} alt="skill-logo" />
              </a>
            </li>
            <li className="skills-item">
              <a href="https://developer.android.com" target="_blank">
                <img src={android} alt="skill-logo" />
              </a>
            </li>
            <li className="skills-item">
              <a href="https://www.javascript.com/" target="_blank">
                <img src={js} alt="skill-logo" />
              </a>
            </li>
            <li className="skills-item">
              <a href="https://www.postman.com/" target="_blank">
                <img src={post} alt="skill-logo" />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </Main>
  );
}

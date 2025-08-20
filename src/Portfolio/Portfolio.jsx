import React, { useState } from "react";
import Main from "../Main/Main";
import "./Portfolio.css";
import netflix from "../assets/netflix.png";
import restaurant from "../assets/restaurant.png";

const Portfolio = () => {
  const NameOfScreen = "Portfolio";
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <ul className="project-wrapper">
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="https://bezawitsebsbe.github.io/restaurant-page/">
                <figure>
                  <img src={restaurant} alt="project-image" />
                </figure>
              </a>
              <h6>Restaurant page</h6>
              <p>Website</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <h6>Netflix Clone</h6>
              <p>Application</p>
            </li>
          </ul>
        );
      case "web-development":
        return (
          <div>
            <h3>Web Development Projects</h3>
            <div>Web Project 1</div>
            <div>Web Project 2</div>
          </div>
        );
      case "ui-ux":
        return (
          <div>
            <h3>UI/UX Projects</h3>
            <div>UI/UX Project 1</div>
            <div>UI/UX Project 2</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Main NameOfScreen={NameOfScreen}>
      <nav>
        <ul>
          <li onClick={() => handleTabClick("all")}>All</li>
          <li onClick={() => handleTabClick("web-development")}>
            Web Development
          </li>
          <li onClick={() => handleTabClick("ui-ux")}>UI/UX</li>
        </ul>
      </nav>
      <div className="content">{renderContent()}</div>
    </Main>
  );
};

export default Portfolio;

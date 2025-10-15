import React, { useState } from "react";
import Main from "../Main/Main";
import "./Portfolio.css";
import netflix from "../assets/netflix.png";
import restaurant from "../assets/restaurant.png";
import todolist from "../assets/todolist.png";
import quantum from "../assets/quantum.png";
import amazon from "../assets/amazon.png";
import fitness from "../assets/fitness-tracker.png";
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
              <a href="https://bezawitsebsbe.github.io/Netflix-Clone-2024/">
                <figure>
                  <img src={netflix} alt="project-image" />
                </figure>
              </a>
              <div className="project-text">
                <h6>Netflix Clone</h6>
                <p>Application</p>
              </div>
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
                  <img src={quantum} alt="project-image" />
                </figure>
              </a>
              <h6></h6>
              <p>Website</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={amazon} alt="project-image" />
                </figure>
              </a>
              <h6>Amazon Clone</h6>
              <p>website</p>
            </li>
            <li className="project-list">
              <a href="https://bezawitsebsbe.github.io/to-do-list/">
                <figure>
                  <img src={todolist} alt="project-image" />
                </figure>
              </a>
              <h6>To-Do List</h6>
              <p>web-app</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={fitness} alt="project-image" />
                </figure>
              </a>
              <h6>Fitness Tracker</h6>
              <p>Web-app</p>
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
      case "website":
        return (
          <ul className="project-wrapper">
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={amazon} alt="project-image" />
                </figure>
              </a>
              <h6>Amazon Clone</h6>
              <p>website</p>
            </li>
            <li className="project-list">
              <a href="https://bezawitsebsbe.github.io/to-do-list/">
                <figure>
                  <img src={todolist} alt="project-image" />
                </figure>
              </a>
              <h6>To-Do List</h6>
              <p>web-app</p>
            </li>
            <li className="project-list">
              <a href="#">
                <figure>
                  <img src={fitness} alt="project-image" />
                </figure>
              </a>
              <h6>Fitness Tracker</h6>
              <p>Web-app</p>
            </li>
            <li className="project-list">
              <a href="https://bezawitsebsbe.github.io/Netflix-Clone-2024/">
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
                  <img src={quantum} alt="project-image" />
                </figure>
              </a>
              <h6></h6>
              <p>Website</p>
            </li>
          </ul>
        );
      case "mobile-app":
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
      <nav className="portfolio-nav">
        <ul>
          <li
            onClick={() => handleTabClick("all")}
            className={activeTab === "all" ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={() => handleTabClick("website")}
            className={activeTab === "website" ? "active" : ""}
          >
            Websites
          </li>
          <li
            onClick={() => handleTabClick("mobile-app")}
            className={activeTab === "mobile-app" ? "active" : ""}
          >
            Mobile Apps
          </li>
        </ul>
      </nav>
      <div className="content">{renderContent()}</div>
    </Main>
  );
};

export default Portfolio;

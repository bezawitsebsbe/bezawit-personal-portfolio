import React from "react";
import "./Main.css";
import logo from "../assets/portfolio_image.jpg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function Main({ children, NameOfScreen }) {
  const [showcontact, setShowContact] = useState(false);
  const [viewportSize, setViewportSize] = useState({
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024
  });
  const handleShowContact = () => {
    setShowContact((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1024
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="body">
      <div
        className="main-header"
        style={{
          paddingBottom: showcontact
            ? viewportSize.isMobile
              ? "30em"
              : viewportSize.isTablet
              ? "24em"
              : "12em"
            : "0",
          transition: "padding-bottom 0.5s ease"
        }}
      >
        <div className="image-div">
          <img src={logo} alt="About Me" />
        </div>
        <div className="name-div">
          <h1>Bezawit Sebsbe</h1>
          <a className="job-title" href="#">
            Software developer
          </a>
        </div>
        <button className="show-contact" href="#" onClick={handleShowContact}>
          {viewportSize.isMobile ? (
            showcontact ? (
              <div className="show-contact-icon">
                <FontAwesomeIcon icon={faChevronUp} />
              </div>
            ) : (
              <div className="show-contact-icon">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )
          ) : showcontact ? (
            "Hide Contacts"
          ) : (
            "Show Contacts"
          )}
        </button>
        {showcontact && (
          <div className="contacts-wrapper">
            <div className="contacts">
              <div className="icon-div">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <div>
                <p>
                  <strong>Email</strong>
                </p>
                <p>sebsbebezawit@gmail.com</p>
              </div>
            </div>
            <div className="contacts">
              <div className="icon-div">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <p>
                  <strong>Location</strong>
                </p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="contacts">
              <div className="icon-div">
                <FontAwesomeIcon icon={faMobileScreen} />
              </div>
              <div>
                <p>
                  <strong>Phone</strong>
                </p>
                <p>+251 929013325</p>
              </div>
            </div>
            <div className="contacts-footer">
              <a href="https://www.linkedin.com/in/bezawit-sebsbe-b5ba02331/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/bezawitsebsbe">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://x.com/beza_sebe">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="about-content">
        <header className="header">
          <nav className="header-nav">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" activeClassName="active">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" activeClassName="active">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="about-me">
          <h1>{NameOfScreen}</h1>
          <div class="golden-dash"></div>
          {children}
        </div>
      </div>
    </article>
  );
}

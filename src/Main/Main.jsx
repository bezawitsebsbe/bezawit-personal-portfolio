import React from "react";
import "./Main.css";
import logo from "../assets/logo192.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Main({ children, NameOfScreen }) {
  const [showcontact, setshowcontact] = useState(false);

  const handleShowContact = () => {
    setshowcontact((prev) => !prev);
  };
  return (
    <article className="body">
      <div
        className="main-header"
        style={{
          paddingBottom: showcontact ? "12em" : "0",
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
          {showcontact ? "Hide Contacts" : "Show Contacts"}
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
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">
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

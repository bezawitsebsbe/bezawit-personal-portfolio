import React from "react";
import "./Main.css";
import logo from "../assets/logo192.png";
import { Link, NavLink } from "react-router-dom";

export default function Main({ children, NameOfScreen }) {
  return (
    <article className="body">
      <div className="main-header">
        <div className="image-div">
          <img src={logo} alt="About Me" />
        </div>
        <div className="name-div">
          <h1>Bezawit Sebsbe</h1>
          <a className="job-title" href="#">
            Software developer
          </a>
        </div>
        <div>
          <a className="show-contact" href="#">
            Show contacts
          </a>
        </div>
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

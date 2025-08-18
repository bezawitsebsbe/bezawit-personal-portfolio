import React from "react";
import Main from "../Main/Main";
import "./Contact.css";

export default function Contact() {
  const NameOfScreen = "Contact";
  return (
    <Main NameOfScreen={NameOfScreen}>
      <article className="Contact-article">
        <h1>Contact form</h1>

        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </article>
    </Main>
  );
}

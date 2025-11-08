import React from "react";
import Main from "../Main/Main";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const NameOfScreen = "Contact";
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log(
          "Message sent successfully:",
          response.status,
          response.text
        );
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Error sending message, please try again later.");
      });
    console.log("User ID:", userId);
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
  };
  return (
    <Main NameOfScreen={NameOfScreen}>
      <article className="Contact-article">
        <h1>Contact Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            autoComplete="off"
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" id="message-button">
            Send Message
          </button>
        </form>
      </article>
    </Main>
  );
}

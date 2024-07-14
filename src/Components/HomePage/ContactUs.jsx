import "../../../CSS/ContactUs.css";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_7zhl7xx", "template_9v52qxn", form.current, {
          publicKey: "OobsCWfPnw4ozeapk",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();  // Reset the form fields after successful submission
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

    return (
        <section className="contact-us-page-section">
        <div className="form-container">
          <div className="title-container">
            <h2 className="contact-us">CONTACT US</h2>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              className="inputs"
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            ></input>
            <input
              className="inputs"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            ></input>
            <input
              className="inputs"
              type="text"
              placeholder="Subject"
              name="subject"
              required
            ></input>
            <textarea
              className="message"
              type="text"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <div className="button-container">
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    )

}

export default ContactUs;
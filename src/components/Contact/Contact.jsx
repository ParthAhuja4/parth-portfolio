import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaRegAddressBook, FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { servicekey, templateid, publickkey } from "./keys";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(servicekey, templateid, form.current, publickkey)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title text-cs">CONTACT ME</h2>
      <div className="contact_container container">
        <div className="contact_info">
          <div className="contact_card">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/parthahuja4/"
              className="color"
            >
              <span className="contact_card-icon">
                <FaLinkedin />
              </span>
            </a>
            <h3 className="contact_card-title">LinkedIn</h3>
            <p className="contact_card-data">Parth Ahuja</p>
          </div>
          <div className="contact_card">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:parthahuja006@gmail.com"
              className="color"
            >
              <span className="contact_card-icon">
                <FaRegEnvelope />
              </span>
            </a>
            <h3 className="contact_card-title">Email</h3>
            <p className="contact_card-data">parthahuja006@gmail.com</p>
          </div>
          <div className="contact_card">
            <a target="_blank" rel="noreferrer" href="tel:+919315330295">
              <span className="contact_card-icon color">
                <FaRegAddressBook />
              </span>
            </a>
            <h3 className="contact_card-title">Phone No.</h3>
            <p className="contact_card-data">+91 9315330295</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <label className="contact_form-tag text-cs">
                Your Full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="contact_form-div full-width">
              <label className="contact_form-tag text-cs">
                Your Subject <b>*</b>
              </label>
              <input
                type="text"
                name="subject"
                className="contact_form-input"
                placeholder="Subject"
                required
              />
            </div>
            <div className="contact_form-div full-width contact_form-area">
              <label className="contact_form-tag text-cs">
                Your Message <b>*</b>
              </label>
              <textarea
                name="message"
                className="contact_form-input"
                placeholder="Write your message here..."
                required
              />
            </div>
            <div className="contact_submit">
              <button type="submit" className="bttn text-cs sub">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

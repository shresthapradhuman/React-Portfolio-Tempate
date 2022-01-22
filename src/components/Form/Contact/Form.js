import React from "react";
import "./Form.scss";

function Form() {
  return (
    <>
      <div className="form">
        <form action="/" name="contact" method="post">
          <div className="form__wrapper">
            <input
              type="text"
              className="form__input form__input--name"
              name="name"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="form__input form__input--email"
              name="email"
              placeholder="Email Address"
            />
            <textarea
              className="form__input form__input--textarea"
              name="message"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="form__button">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;

import React, { useState } from 'react';

const ContactForm = () => {
  const [cData, setcData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const inputevent = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setcData(olddata => {
      return {
        ...olddata,
        [inputName]: inputValue,
      };
    });
  };

  const contactSubmit = e => {
    e.preventDefault();

    alert(`Hello ${cData.name} your email id "${cData.email}" subject "${cData.subject}" and your message "${cData.message}"`);
  };

  return (
    <>
      <form onSubmit={contactSubmit} className="php-email-form">
        <div className="row">
          <div className="form-group col-md-6">
            <label for="name">Your Name</label>
            <input
              type="text"
              name="name" value={cData.name}
              onChange={inputevent}
              className="form-control"
              id="name"
              required
            />
          </div>
          <div className="form-group col-md-6 mt-3 mt-md-0">
            <label for="name">Your Email</label>
            <input
              type="email"
              onChange={inputevent}
              className="form-control"
              name="email" value={cData.email}
              id="email"
              required
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <label for="name">Subject</label>
          <input
            type="text"
            onChange={inputevent}
            className="form-control"
            name="subject" value={cData.subject}
            id="subject"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label for="name">Message</label>
          <textarea
            className="form-control"
            onChange={inputevent}
            name="message" value={cData.message}
            rows="10"
            required
          ></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
